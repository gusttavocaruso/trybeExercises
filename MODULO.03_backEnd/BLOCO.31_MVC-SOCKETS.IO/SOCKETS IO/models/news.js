const connection = require('./connection');

const findNews = async () => {
  const conn = await connection();
  return conn.collection('news').find({}).toArray();
};

const createNews = async (title, message) => {
  const conn = await connection();
  const result = await conn.collection('news').insertOne({ title, message });

  return {
    id: result.insertedId,
    title,
    message,
  }; 
};

module.exports = {
  findNews,
  createNews,
};