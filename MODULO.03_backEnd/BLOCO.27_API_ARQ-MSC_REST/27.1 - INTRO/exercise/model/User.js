const connection = require('./connectionDB');

function formatUser(document) {
  const { _id, password, ...user } = document;
  
  const formattedResult = { id: _id, ...user };
  
  return formattedResult;
}

function isValid({ firstName, lastName, email, password }) {
  const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
    return false;
  }

  return PASSWORD_REGEX.test(password);
}

// function create({ firstName, lastName, email, password }) {
//   return connection().then((db) => db
//     .collection('users')
//     .insertOne({ firstName, lastName, email, password }))
//     .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
// }

const create = async ({ firstName, lastName, email, password }) => {
  const conn = await connection();
  return conn.collection('users').insertOne({ firstName, lastName, email, password })
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

module.exports = {
  isValid,
  create,
};

/*
formatUser() remove dos documentos da collection 'users', os campos indesejados
Extraímos as propriedades `_id` e `password`
Utilizamos o operador _rest_ (`...`) para guardar o resto das propriedades numa constante chamada `user`.
Criamos um novo objeto contento os campos já formatados
O campo `id` recebe o valor de `_id`
Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos gravado em `user`
Retornamos o objeto com os campos formatados

isValid() é um método para verificar se os dados do usuário são válidos
Regex que valida strings de 6 ou mais caracteres alfanuméricos
Criamos um array para poder verificar com facilidade cada campo
Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`
Por último, só precisamos garantir que `password` passa no regex.
Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`

create() é responsável por criar o usuário no banco de dados
Utilizamos o `insertOne` para inserir o usuário na collection `users`
Depois de criar o usuário, obtermos o ID gerado pelo banco e retornamos num objeto juntamente com os demais dados do usuário recém-criado */
