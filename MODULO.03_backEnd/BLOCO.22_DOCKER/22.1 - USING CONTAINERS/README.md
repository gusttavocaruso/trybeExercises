## CRIAR CONTAINER 

docker container run nome_imagem:tag_dada

EX ==>> docker container run ubuntu <!-- (sem tag) -->


## DAR NOME PRO CONTAINER 

docker container run --name nome_dado nome_imagem

EX ==>> docker container run --name trybe-legal ubuntu

## LISTAR CONTAINER

docker container ls \
docker container ls -a \
docker container ls -l

## CRIAR UM CONTAINER E RODAR UM COMANDO 

docker container run nome_imagem comando comando_argumento

EX ==>> docker container run ubuntu echo 'Hello'

## ACESSAR O TERMINAL DO CONTAINER

docker container run -ti nome_imagem

## MODO CLEAN-UP

docker container run --rm nome_imagem 

EX ==>> docker container run --rm ubuntu

## RODAR CONTAINER EM SEGUNDO PLANO

docker container run -d nome_imagem

## INICIAR, REINICIAR, PAUSAR, RESUMIR E PARAR UM CONTAINER

docker container start container_id OU container_name \
docker container restart container_id OU container_name \
docker container pause container_id OU container_name \
docker container unpause container_id OU container_name \
docker container stop container_id OU container_name

## RETOMAR O ACESSO A UM CONTAINER INICIADO COM -dit

docker container attach container_id OU container_name

## EXCLUINDO CONTAINERS

docker container rm container_id OU container_name \
docker container rm -f container_id OU container_name

## LIMPANDO CONTAINERS INATIVOS DO PC
(use com moderação)

docker container prune
y


=================
## Apaga todos os contêiners.
docker container rm -f $(docker container ls -a -q)
 
## Apaga todas as Imagens baixadas.
docker image rm $(docker image ls -a -q)
 
## Apaga todos os Volumes.
docker volume rm $(docker volume ls -q)
 
## Apaga todas as redes.
docker network rm $(docker network ls -q)

#### Onde:
 -a  : signfica todos os recursos <br />
 -q  : significa o ID numérico do recurso
