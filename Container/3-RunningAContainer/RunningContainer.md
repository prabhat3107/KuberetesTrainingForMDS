# Running a Container

#### Creating and Running a Container. 

docker container run:  command first creates a container and then runs the container 

To create the container, it first checks if the image is available locally. 
If the image is not available locally, its latest version is downloaded from the Docker registry.


```shell
docker container run --rm -it --name demo-c1 -h ubuntu-h1 ubuntu:latest /bin/bash
```

The image can be pulled locally by docker pull command 

```shell
docker pull ubuntu:latest
```

#### listing running containers : 
```shell
docker ps  
```
#### listing all ( including stopped ) containers
```shell
docker ps -a
```

### listing container images 

```shell
docker image ls
```

#### stopping a container 

```shell
docker container stop  <container name or container id>
```

#### auto-restarting a container 

```shell
docker container run -d -p 8080:8080 -h node-demo-h1 --name node-demo-c1 --restarrt on-failure:3 node-demo
```


#### container name : 

Docker automatically assigns a random name to a container after it is created. 
We can always specify the container name with --name option


```text
docker container run \ 
  --name <container name>  <image name>
```

```shell
docker container run --name ubuntu-c1 ubuntu:latest
```

#### Lables : 

```shell
docker container run --rm -d --name ubuntu-w-lable-c1 \
  -l deployer=Prabhat -l env=dev ubuntu:latest sleep 1000
```

Searching containers using labels
```shell
docker container ls -a -f lable=deployer=Prabhat
```

#### Hostname 
```shell
docker container run --rm -it ubuntu:latest /bin/bash
```
output : you can see that the hostname of the new container is same as that of the container id.  
```text
$ docker container run --rm -it ubuntu:latest /bin/bash
root@8086a74edb33:/# 
root@8086a74edb33:/# hostname
8086a74edb33
root@8086a74edb33:/# 

]$ docker ps 
CONTAINER ID   IMAGE           COMMAND        CREATED          STATUS          PORTS     NAMES
8086a74edb33   ubuntu:latest   "/bin/bash"    7 minutes ago    Up 7 minutes              relaxed_ramanujan
34edc21c196f   ubuntu:latest   "sleep 1000"   10 minutes ago   Up 10 minutes             ubuntu-w-lable-c1
```

```shell
docker container run --rm -it -h  demo-host ubuntu:latest /bin/bash
```
#### output: 
```text
]$ docker container run --rm -it -h  demo-host ubuntu:latest /bin/bash
root@demo-host:/# 
root@demo-host:/# 
root@demo-host:/# 
root@demo-host:/# 
```

### Storage Volumes : 


### Resource Quotas 
