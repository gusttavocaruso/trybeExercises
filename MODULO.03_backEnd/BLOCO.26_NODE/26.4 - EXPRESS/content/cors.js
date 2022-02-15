/*
⚠️ Observação: Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é preciso instalar um módulo que libera o acesso da nossa API para outras aplicações. Para isso basta instalar um módulo chamado cors usando npm i cors e adicionar as seguintes linhas no seu arquivo index.js . */

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
