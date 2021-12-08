const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'hello-félla'});
});

// ex1.
app.get('/ping', (req, res, next) => {
  return res.status(200).json({ message: 'pong'});
})

// ex2.
app.post('/hello', (req, res, next) => {
  const { name } = req.body;

  return res.status(200).json({ message: `Hellow ma friend ${name}`});
})

// ex3.
app.post('/greetings', (req, res, next) => {
  const { name, age } = req.body;

  if(age>17) return res.status(200).json({ message: `Hello ${name}`});

  return res.status(401).json({ message: 'Unauthorized'});
})

// ex4.
app.put('/users/:name/:age', (req, res, next) => {
  const { name, age } = req.params;

  return res.status(200).json({ message: `Seu nome é ${name} e vc tem ${age} anos`});
})

// ex6.
/*
const rescue = require('express-rescue'); // ??
const simpsonsAPI_fs = require('./simpsonsAPI_fs');

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsAPI_fs.getSimpsons();

  res.status(200).json(simpsons);
})) 
*/

// ex7.
/*
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsAPI_fs.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);
*/

// ex8.
/*
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);
*/

app.listen(PORT, () => console.log(`On na porta ${PORT}`));
