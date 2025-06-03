FROM node:lts
LABEL authors="prabhat"
ENV AP="/api-app"

COPY api-app $AP
WORKDIR $AP
RUN npm init -y
RUN npm install express
RUN npm install mysql2

ENTRYPOINT ["node", "index.js"]