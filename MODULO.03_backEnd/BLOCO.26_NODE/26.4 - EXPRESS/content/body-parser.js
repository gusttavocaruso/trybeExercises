/*
Como explicamos, os dados enviados pelo front-end são comprimidos, e para que conseguimos remontar os dados enviados precisamos parsear as informações para um formato compreensível para o back-end, esse formato no caso vai ser JSON. Para instalar esse pacote execute o comando:

npm i body-parser

Agora no arquivo index.js , faça a modificação abaixo: */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


bodyParser === express.json()
