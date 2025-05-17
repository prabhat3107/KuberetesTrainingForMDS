# Building a Docker Image

## Dockerfile 

Dockerfile desribed the steps that are required to create an image. This is contained
within the root directory f the source code repository for your application.

Below is an example docker file to containerize a demo NodeJS application.

```dockerfile
FROM docker.io/node:lts
LABEL authors="prabhat"
LABEL app='ContainerInfo'

ARG email="prabhat3107@gmail.com"

ENV AP="/data/app"

COPY ./data/app $AP

WORKDIR $AP

RUN npm init -y
RUN npm install express

EXPOSE 8080

CMD ["node", "server.js"]
```
Explanation : 

You create your image based on a standard NodeJS image available from the docker registry

```dockerfile
FROM docker.io/node:lts
```
Label are key/value pair of metadata that can be added to the image. These metadata can late be
used to search for and identify the image and containers. 
```dockerfile
LABEL authors="prabhat"
```
ARG provides a way to set variables and their default values, which are only available during the image build process.
```dockerfile
ARG email="prabhat3107@gmail.com"
```
ENV allows to set shell variables that be used by running application for configuration, in addition to being available during the build process.
```dockerfile
ENV AP="/data/app"
```
COPY instruction is used to copy files from the local filesystem into the image 
It is no longer needed to access to the local filesystem to access them once the image is built.
```dockerfile
COPY ./data/app $AP
```
WORKDIR allows to change the working directory in the image for the remainning build instructions and the default 
process that launches with any resulting containers. 
```dockerfile
WORKDIR $AP
```
RUN instructions/commands executes the commands in a new layer and commits the resutls 
This allows to install dependent packages/libraries in the image. 
```dockerfile
RUN npm init -y
RUN npm install express
```
