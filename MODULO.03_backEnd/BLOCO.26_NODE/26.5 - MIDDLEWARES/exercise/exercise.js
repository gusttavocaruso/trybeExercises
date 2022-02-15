const express = require('express');
const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require('./middlewares/validations');

const app = express()
const PORT = 3000

app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'Hellow Félla'});
});

app.post(
  '/user/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res, next) => {
    return res.status(201).json({ message: 'user created' });
  }
);

app.post(
  '/login',
  isValidEmail,
  isValidPassword,
  (_req, res, next) => {
    return res.status(200).json({ token: '132156464e' });
  }
);

// app.use(error);

app.listen(PORT, () => console.log(`O pai ta on na porta: ${PORT}!`))
