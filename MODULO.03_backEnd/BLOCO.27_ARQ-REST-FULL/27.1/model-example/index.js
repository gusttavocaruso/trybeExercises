const express = require('express');
const Author = require('./models/Author');

const app = express();
const PORT = 3000;

app.get('/authors', async(_req, res, _next) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/', (_req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
