### CONSULTAR REDES

docker network ls


### CRIAR PROPRIA REDE DE CONTAINERS

docker network create -d bridge minha-rede


### VINCULAR A UMA REDE CRIADA UM CONTAINER DURANTE SUA CRIAÇÃO

docker container run -itd --network minha-rede --name meu-container


### VINCULAR A UMA REDE CRIADA UM CONTAINER JA EXISTENTE

docker network connect minha-rede meu-container

docker network disconnect minha-rede meu-container
