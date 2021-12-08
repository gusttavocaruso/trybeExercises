const express = require('express');

const app = express()
const PORT = 3000
app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'Boas vindas'});
});

app.use(error); // chama sempre middleware de erro

app.listen(PORT, () => console.log(`O pai ta on na porta: ${PORT}!`))