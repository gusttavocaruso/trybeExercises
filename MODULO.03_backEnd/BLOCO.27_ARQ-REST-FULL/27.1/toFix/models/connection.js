const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: '91280394',
  database: 'model_example'
});

module.exports = connection;
