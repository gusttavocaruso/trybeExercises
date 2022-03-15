const connection = require('./connection');

const findAll = async () => {
  const conn = await connection();
  const students = await conn.collection('students').find().toArray();

  return students;
};

const addStudent = async ({ name, favoriteProject }) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('students').insertOne({ name, favoriteProject });

  return insertedId;
};

module.exports = {
  findAll,
  addStudent,
};
