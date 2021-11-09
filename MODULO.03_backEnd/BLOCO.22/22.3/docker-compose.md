  version: "<VERSÃO-DO-COMPOSE>"
  services: # Definição dos containers
    <MEU-CONTAINER-1>:
      image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
      # ... outras configurações
    <MEU-CONTAINER-2>:
      build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
      # ... outras configurações
    <MEU-CONTAINER-N>:
      image: <MINHA-IMAGEM:VERSÃO>
      # ... outras configurações


### ATIVAR O DOCKER-COMPOSE

docker-compose up

docker-compose backend
docker-compose database

docker-compose up --build nome_serviço


### PARAR CONTAINERS E EXCLUIR OBJETOS/REDES 

docker-compose down


### LISTAR 

docker-compose ps


### START-STOP

docker-compose start
docker-compose stop

