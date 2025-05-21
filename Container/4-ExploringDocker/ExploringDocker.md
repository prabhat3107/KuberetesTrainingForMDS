
#### docker container exec 

docker container exec  : allows to remotely executing a new process in a running container. 


Start a container from node-demo  image : 
```shell
docker container run  -d -p 8080:8080 -h node-demo-h1 --name node-demo-c1 --restart on-failure:3 node-demo

```

```text
$ docker container run  -d -p 8080:8080 -h node-demo-h1 --name node-demo-c1 --restart on-failure:3 node-demo
6167346cfc38bc23ca4096679522d61c91a87f95038b59addf824c36d130ab1d
[prabhat@aditya2:~] [20:49]$ 
[prabhat@aditya2:~] [20:49]$ docker ps 
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS                    PORTS                                         NAMES
6167346cfc38   node-demo   "docker-entrypoint.s…"   12 minutes ago   Up 12 minutes (healthy)   0.0.0.0:8080->8080/tcp, [::]:8080->8080/tcp   node-demo-c1

[prabhat@aditya2:~] [21:02]$ docker container exec -it node-demo-c1 /bin/bash
root@node-demo-h1:/data/app# ls
node_modules  package-lock.json  package.json  server.js
root@node-demo-h1:/data/app# 
root@node-demo-h1:/data/app# 
root@node-demo-h1:/data/app# cd ..
root@node-demo-h1:/data# ls
app
root@node-demo-h1:/data# cd ..
root@node-demo-h1:/# ls
bin  boot  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@node-demo-h1:/# ps -a
    PID TTY          TIME CMD
     72 pts/0    00:00:00 ps
root@node-demo-h1:/# ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 00:49 ?        00:00:00 node server.js
root          63       0  0 01:02 pts/0    00:00:00 /bin/bash
root          73      63 50 01:03 pts/0    00:00:00 ps -ef
root@node-demo-h1:/# 

```

#### docker container logs



