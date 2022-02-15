const express = require('express');
const User = require('./model/User');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/user', async (req, res, next) => {
  // const { firstName, lastName, email, password } = req.body;
  const bodyJSON = req.body;
  console.log(bodyJSON)

  const createUser = await User.create(bodyJSON);
  console.log(createUser)

  return res.status(200).json({ message: `user ${createUser.email} created sucessfull `})
});

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


/* parei tentando inserir no banco de dados os valores do body em formato diferente do que está no body */
