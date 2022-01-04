const express = require('express');
const Books = require('./models/Books');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/books', async(_req, res, _next) => {
  const books = await Books.getAll();

  return res.status(200).json(books);
});

app.get('/books/:id', async(req, res, _next) => {
  const { id } = req.params;
  // const authorId = await Books.getByAuthorId(id);
  const authorId = await Books.findById(id);

  return res.status(200).json(authorId);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const booksValidation = await Books.isValid(title, author_id);

  if (!booksValidation) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  booksValidation;

  return res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.get('/', (_req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
