## ---- Postgres

docker run --name postgres -e POSTGRES_USER=lkz -e POSTGRES_PASSWORD=postgrespass -e POSTGRES_DB=heroes -d postgres

## ---- Command

docker ps = saber o que esta rodando
docker exec -it postgres bash

## ---- Adminer

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## ---- MongoDB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=mongoadmin -d mongo:4

## ---- MongoClient

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

## -- executar um comando dentro de um container com docker exec

docker exec -it mongodb mongo --host localhost -u admin -p mongoadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'lucas', pwd:'minhasenha', roles:[{role: 'readWrite', db : 'herois'}]})"


## -- Conectar docker e mongodb
docker exec -it 657a67821aa7 mongo -u lucas -p minhasenha --authenticationDatabase herois

