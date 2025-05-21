## Starting a Container

```shell
docker container run --rm -d -p 8080:8080 --name node-hello-c1 -e WHO="Prabhat" docker-node-hello
```

The above is same as 

```shell
docker container run --rm -d \
    --publish mode=ingress,published=8080,target=8080 \
    --env WHO="Sean and Karl" \
    docker-node-hello
```
