// npm install axios form-data

const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

/* Aqui adicionamos uma propriedade chamada 'file' onde carregará nosso arquivo */
const formInfo = new FormData();
formInfo.append('abc', stream);

/* Esse arquivo não será enviado  no body da requisição como de costume,
   dessa vez iremos utilizar o header para  enviar essa informação. */
const formHeaders = formInfo.getHeaders();
const URL = 'http://localhost:3000/files/upload';

axios.post(URL, formInfo, { headers: { ...formHeaders } })
  .then((response) => response)
  .catch((error) => error);
