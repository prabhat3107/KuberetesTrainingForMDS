### Build the image:

```shell
docker image build -t image-layer-demo:latest .

```

Check layers by using docker image history command 

```shell
$ docker image history image-layer-demo:latest
IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
70eb99b91884   4 minutes ago   CMD ["/usr/sbin/httpd" "-DFOREGROUND"]          0B        buildkit.dockerfile.v0
<missing>      4 minutes ago   RUN /bin/sh -c dnf install -y httpd # buildk…   172MB     buildkit.dockerfile.v0
<missing>      4 minutes ago   LABEL authors=prabhat                           0B        buildkit.dockerfile.v0
<missing>      6 weeks ago     CMD ["/bin/bash"]                               0B        buildkit.dockerfile.v0
<missing>      6 weeks ago     ADD fedora-20250330.tar / # buildkit            160MB     buildkit.dockerfile.v0
<missing>      6 weeks ago     ENV DISTTAG=f42container FGC=f42 FBR=f42        0B        buildkit.dockerfile.v0
<missing>      6 weeks ago     LABEL maintainer=Clement Verna <cverna@fedor…   0B        buildkit.dockerfile.v0
```

Lets try to remove the dnf cache as they are unnecessarily occupying disk space  
Now modify the docker image file and build it again . 

```dockerfile
FROM docker.io/fedora
LABEL authors="prabhat"
RUN dnf install -y httpd
#bllow line cleans up dnf cache
RUN dnf clean all
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
```

```shell
docker image history image-layer-demo:latest
```

List the build layers  again 

```shell
docker image history image-layer-demo:latest
```
You can see that it added additional layer instead of removing the dnf cached layer.
This is because image layers are strictly additive in nature. Once a layer is created it can't be removed
This means that you can't make earlier layers in an image smaller by deleting the files in subsequent layters. 
When you delete or edit files in subsequent layers, you'r simply masking the older version with the modified 
or removed version in the new layer. 
This means that the only way you can make a layer smaller is by removing files before you save the layer. 

```text
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
29c3ce46c99b   3 seconds ago    CMD ["/usr/sbin/httpd" "-DFOREGROUND"]          0B        buildkit.dockerfile.v0
<missing>      3 seconds ago    RUN /bin/sh -c dnf clean all # buildkit         899kB     buildkit.dockerfile.v0
<missing>      12 minutes ago   RUN /bin/sh -c dnf install -y httpd # buildk…   172MB     buildkit.dockerfile.v0
<missing>      12 minutes ago   LABEL authors=prabhat                           0B        buildkit.dockerfile.v0
<missing>      6 weeks ago      CMD ["/bin/bash"]                               0B        buildkit.dockerfile.v0
<missing>      6 weeks ago      ADD fedora-20250330.tar / # buildkit            160MB     buildkit.dockerfile.v0
<missing>      6 weeks ago      ENV DISTTAG=f42container FGC=f42 FBR=f42        0B        buildkit.dockerfile.v0
<missing>      6 weeks ago      LABEL maintainer=Clement Verna <cverna@fedor…   0B        buildkit.dockerfile.v0

```

The most common way to deal with this is by stringing commands togather on a single Dockerfile line.

```dockerfile
FROM docker.io/fedora
LABEL authors="prabhat"
RUN dnf install -y httpd && \
    dnf clean all
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
```