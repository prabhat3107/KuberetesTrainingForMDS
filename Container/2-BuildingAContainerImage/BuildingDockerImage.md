# Building a Docker Image

## Dockerfile 
The Dockerfile describes the steps required to create an image. This is contained
Within the root directory of the source code repository for your application.

![img.png](pictures/img.png)
### Example:
Below is an example Dockerfile to containerize a demo Node.js application.

```dockerfile
FROM docker.io/node:lts
LABEL authors="prabhat"
LABEL app='ContainerInfo'

ARG email="prabhat3107@gmail.com"

RUN apt update
RUN apt install curl
RUN apt install iproute2 -y

ENV AP="/app"

COPY app $AP

WORKDIR $AP


RUN npm init -y
RUN npm install express

EXPOSE 8080


CMD ["node", "server.js"]

HEALTHCHECK --interval=2m --timeout=3s \
  CMD curl -f http://localhost:8080/ || exit 1
```


#### Explanation : 

You create your image based on a standard NodeJS image available from the Docker registry.

```dockerfile
FROM docker.io/node:lts
```
Labels are key/value pairs of metadata that can be added to the image. This metadata can be
used to search for and identify the image and containers. 
```dockerfile
LABEL authors="prabhat"
```
ARG provides a way to set variables and their default values, which are only available during the image build process.
```dockerfile
ARG email="prabhat3107@gmail.com"
```
ENV allows setting shell variables that are used by the running application for configuration, in addition to being available during the build process.
```dockerfile
ENV AP="/data/app"
```
The COPY instruction is used to copy files from the local filesystem into the image. 
It is no longer needed to access the local filesystem to access them once the image is built.
```dockerfile
COPY ./data/app $AP
```
WORKDIR allows changing the working directory in the image for the remaining build instructions and the default 
process that launches with any resulting containers. 
```dockerfile
WORKDIR $AP
```
RUN instructions/commands execute the commands in a new layer and commit the results 
This allows for the installation of dependent packages/libraries in the image. 
```dockerfile
RUN npm init -y
RUN npm install express
```
The EXPOSE instruction in a Dockerfile declares the ports on which a container will listen at runtime.
```dockerfile
EXPOSE 8080
```
The CMD instruction in a Dockerfile specifies the default command to execute when a container starts from the image.
```dockerfile
CMD ["node", "server.js"]
```

### Dockerfile Reference
#### Official reference page
https://docs.docker.com/reference/dockerfile/
#### From Internet 
https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index