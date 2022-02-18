const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const conn = await connection();
  const { insertedId } = await conn
    .collection('movies')
    .insertOne({ title, directedBy, releaseYear });

  return { id: '1' };
};

module.exports = {
  create,
};
