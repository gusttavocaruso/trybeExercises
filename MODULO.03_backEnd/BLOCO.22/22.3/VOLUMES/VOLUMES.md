### BIND DE PASTAS

a flag:
-v "/pasta/do/pc/que/tem/o/arquivo:/diretorio/da/imagem_padrao/" nome_imagem

criando container + flag volume:
docker run -d --name nome_container_dado -p 8881:80 -v "/pasta/do/pc/que/tem/o/arquivo:/diretorio/da/imagem_padrao/" nome_imagem


### VOLUME NO DOCKERFILE

VOLUME ["/pasta/do/pc/"]


### MAPEAR VOLUMES

docker volumes ls


### REMOVER VOLUMES 

docker volume rm volume_nome

docker volume prune

docker container rm -v container_id OU container_nome <!-- remove o container e o volume associado -->