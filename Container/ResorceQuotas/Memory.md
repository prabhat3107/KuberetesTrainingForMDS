## Memory 

We can control how much memory a container can access in a manager similar to contsraining the CPU. 
There is one fundamental difference: while constraining the CPU only impactes the applications priority for CPU time, 
the meory limit is a hard limit. The container can't exceed the allocated memory. 
It is possible to allocate more memory than the actual hosts' RAM. In this case, the container will resort to using swap,
just like normal Linux process.

```shell
docker container run --rm -ti --memory 512m --memory-swap=768m \
    spkane/train-os stress -v --cpu 1 --io 1 --vm 2 --vm-bytes 128M \
    --timeout 30s
```