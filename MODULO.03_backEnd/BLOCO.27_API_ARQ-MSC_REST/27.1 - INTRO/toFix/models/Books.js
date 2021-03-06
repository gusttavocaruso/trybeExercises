const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const conn = await connection();
  return conn.collection('books').find().toArray();
};

/* SQL ==========
const getAll = async () => {
  const query = 'SELECT id, title, author_id FROM model_example.books;'
  const [books] = await connection.execute(query);
  return books;
}; ========== */


const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
}

/* SQL =============
const getByAuthorId = async (authorId) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;'
  const [authorBooks] = await connection.execute(query, [authorId]);

  return authorBooks;
}; =========== */


const isValid = (title, _authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  // if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};


const create = (title, authorId) => connection()
  .then((db) => db.collection('books').insertOne({ title, authorId }));

/* SQL ============
const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
); ============== */


module.exports = {
  getAll,
  // getByAuthorId,
  findById,
  isValid,
  create,
};
