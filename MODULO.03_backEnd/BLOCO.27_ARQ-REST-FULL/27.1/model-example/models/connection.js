const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'trybe',
    password: '91280394',
    database: 'model_example' });

module.exports = connection;

/*
- host : local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos localhost ;
- user : usuário que vamos utilizar para acessar o banco. Estamos usando o usuário root nesse exemplo;
- password : senha do usuário especificado. Coloque '' se não houver senha para o usuário;
- database : nome do banco ao qual queremos nos conectar;
*/
