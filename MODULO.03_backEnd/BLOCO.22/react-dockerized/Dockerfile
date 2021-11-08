
# 1ª PARTE =======
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# 2ª PARTE =====
FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


# 1ª PARTE =========================

# A - No Dockerfile do nosso mini-projeto, vamos basear nossa imagem no node:14-alpine (NodeJS versão 14 que roda a partir da distro Alpine) e dar o alias "build" para ela

# B - Com o comando WORKDIR , podemos definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos

# C - No Dockerfile do nosso mini-projeto, vamos copiar todos os arquivos que começam com "package" ( package.json e package-lock.json ), para nosso diretório atual, a pasta /app

# D - No Dockerfile do nosso mini-projeto, vamos rodar o comando de instalação da nossa aplicação, passando um parâmetro para suprimir mensagens de aviso e facilitar a visualização do processo, quando ele ocorrer

# E - no Dockerfile do nosso mini-projeto, podemos definir a cópia de todos os arquivos apenas com o comando ' . '

# F - Também devemos adicionar um comando para executar o processo de build * da nossa aplicação, no Dockerfile :
# * Esses comandos podem variar dependendo da aplicação que você for rodar.
# No nosso exemplo, uma aplicação em React possui um script para gerar uma versão otimizada da página criada, por faremos esse processo aqui.


# 2ª PARTE =======================

# Aqui faremos um negócio chamado multi-stage build *, que nada mais é que dividir o script do Dockerfile e mais de uma parte.

# A/B - Agora, vamos definir a imagem de origem do Nginx , com o alias "prod". Em seguida, iremos copiar as informações da imagem que apelidamos de "build" e sua respectiva pasta para o diretório do servidor, como a seguir:

# C - Aqui é necessário sabermos que grande parte dos serviços (sobretudo os da web) disponibilizam uma porta de acesso externo, portanto, precisamos especificá-la com o comando EXPOSE

# D - O comando CMD sempre é executado quando o container é iniciado.
# o primeiro argumento é o executável e os demais são seus parâmetros.
# Normalmente utilizamos o CMD para executar o comando que irá rodar com o container, poderíamos usar como exemplo o start de um app , por exemplo
# Aqui temos mais um ponto de atenção, caso o container seja executado passando um comando no run , o comando passado sobrescreverá o comando definido no CMD .

# E - No Dockerfile do nosso mini-projeto, vamos substituir a linha que estava com CMD, agora passando no nosso ENTRYPOINT
