# Setup Instructions

### Build the app container

```shell
# make sure the pwd is rest-api-mysql
docker build -t rest-api-mysql .
```

### create a tag
```shell
docker tag rest-api-mysql prabhat3107/rest-api-mysql:latest
```
### push the image to doker hub ( prabhat3107 )
```shell
docker push prabhat3107/rest-api-mysql:latest
```

### create a new bridged network 'myqpp-net' 

#### Internal DNS Server:
Docker creates an internal DNS server for custom networks.
When you create a Docker network, it automatically configures DNS resolution for containers within that network. 
This server maps container names to their respective IP addresses within the network.

```shell
docker network create myapp-net -d bridge
```
### start the DB container with  --nework myapp-net
#### makesure the host name of the db container is mysql_db 
#### 'mysql_db' is set as DB host in api-app/config.js 
```shell
docker run -d -p 3306:3306 --name mysql_db \
  -h mysql_db \
  -e MYSQL_ROOT_PASSWORD=password \
  -v ./db_init:/docker-entrypoint-initdb.d \
  --network myapp-net \
  mysql:latest
```

### start the app container with --nework myapp-net

```shell
docker run -d -p 3000:3000 --name rest-api-app \
  -h rest-api-app \
  --network myapp-net \
  rest-api-mysql
```

### Check app and DB containers are running 

```shell
docker ps 
```

### open http://localhost:3000/programming-languages


### Reference : 
https://docs.docker.com/reference/
https://blog.logrocket.com/build-rest-api-node-express-mysql/

