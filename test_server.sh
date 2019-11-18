#!/bin/bash

# download the node modules
# npm install

# remove the container if exists or running 
if [ $(docker container ls -q -a --filter name=myserver_con) != '' ]; then
    docker container stop myserver_con
    docker container rm myserver_con
fi

# remove the image if exists
if [ $(docker image ls -q --filter reference=myserver) != '' ]; then
    docker image rm myserver
fi

# build the image
docker build -t myserver .

# start the container
docker container run -itd -p 4000:4000 --name myserver_con myserver