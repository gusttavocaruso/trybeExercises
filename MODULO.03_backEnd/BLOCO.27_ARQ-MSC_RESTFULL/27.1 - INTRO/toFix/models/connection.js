const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
let db = null;

const connection = () => {
  return db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => {
    db = conn.db('model_example');
    return db;
  });
};

module.exports = connection;

/* A API que o pacote mongodb oferece é bem semelhante à que usamos no cliente do MongoDB, com pequenas mudanças. Em vez de fazer db.authors.find() , por exemplo, precisamos fazer db.collection('authors').find() . Além de find , você pode utilizar outros métodos conhecidos, como findOne , insertMany e updateMany .
Nota : o método toArray converte o cursor retornado pelo método find em um array de documentos; */


/* MYSQL =======================
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: '91280394',
  database: 'model_example'
});

module.exports = connection;
*/
