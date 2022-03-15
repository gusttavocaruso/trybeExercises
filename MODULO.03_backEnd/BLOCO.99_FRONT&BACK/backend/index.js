/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');

const { list, registerStudent } = require('./controllers/studentController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/students', list);
app.post('/students/new', registerStudent);

app.use((err, req, res, _next) => {
  if (err.status) return res.status(400).json({ message: err.message });

  return res.status(500).json({ message: 'Internal Error.' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
