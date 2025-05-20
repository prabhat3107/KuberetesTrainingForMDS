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
