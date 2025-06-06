
## Persistent  storage 
1. Bind Mount a directory from the container host: using --mount/-v

``` shell
docker container run --rm -it \
  --mount type=bind,target=/data,source=./container_data \
  ubuntu: latest /bin/bash
```
```test
$ docker container run --rm -it   --mount type=bind,target=/data,source=./container_data   ubuntu:latest /bin/bash
root@a96ce7b7cefb:/# 
root@a96ce7b7cefb:/# 
root@a96ce7b7cefb:/# 
root@a96ce7b7cefb:/# 
root@a96ce7b7cefb:/# pwd
/
root@a96ce7b7cefb:/# cd /data
root@a96ce7b7cefb:/data# ls
i_am_host.txt
root@a96ce7b7cefb:/data# vi i_am_host.txt
bash: vi: command not found
root@a96ce7b7cefb:/data# cat i_am_host.txt   
#######################################################
## you are reading this file from the container host ##
#######################################################
root@a96ce7b7cefb:/data# 
root@a96ce7b7cefb:/data# 
```
#### Using shorter argument -v

```shell
docker container run --rm -it -v ./container_data:/data \
       ubuntu:latest /bin/bash
```

#### readonly mount of the containers root filesystem.

```shell
docker container run --rm -it --read-only=true -v ./container_data:/data \
       -h ubuntu-c1 ubuntu:latest /bin/bash
```

Sometimes it is necessary to make a directory like /tmp writable, even when the rest of the container is read-only. For this use case, you can use the --mount type=tmpfs argument with docker container run so that you can mount a tmpfs filesystem into the container. The tmpfs filesystems are completely in-memory. They will be very fast, but they are also ephemeral and will utilize additional system memory. Any data in these tmpfs directories will be lost when the container is stopped. The following example shows a container being launched with a 256 MB tmpfs filesystem mounted at /tmp:

```text
$ docker container run --rm -ti --read-only=true \
  --mount type=tmpfs,destination=/tmp,tmpfs-size=256M \
  ubuntu:latest /bin/bash

root@25b4f3632bbc:/# df -h /tmp
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           256M     0  256M   0% /tmp
root@25b4f3632bbc:/# grep /tmp /etc/mtab
tmpfs /tmp tmpfs rw,nosuid,nodev,noexec,relatime,size=262144k 0 0
root@25b4f3632bbc:/# exit

```

### Demo - 