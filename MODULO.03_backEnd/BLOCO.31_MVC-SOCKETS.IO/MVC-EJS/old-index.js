const express = require('express')
const mysql =  require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

const connection = mysql.createPool({
  host: 'localhost',
  user: 'docker',
  password: '104668',
  database: 'live_lecture_31_1',
});


// http://expressjs.com/pt-br/api.html#express.urlencoded

// true utiliza a biblioteca qs
// https://www.npmjs.com/package/qs#readme

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/cats', async (req, res) => {
  const [cats] = await connection.execute('SELECT name, age FROM live_lecture_31_1.cats');

  const content = cats.reduce((html, cat) => {
    const { name, age } = cat;
    return html + `<li>Nome: ${name} - Idade: ${age}</li>`
  }, '');
  // `<li>Nome: Gatito I - Idade: 3</li>`
  // `<li>Nome: Gatito I - Idade: 3</li>` + `<li>Nome: Gatito II - Idade: 7</li>`

  const htmlBase = `
    <html>
      <head>
        <title>Gatos</title>
      </head>
      <body>
        <form action="/cats" method="POST">
          <input name="name" type="text">
          <input name="age" type="number">
          <button type="submit">Criar novo gato!</button>
        </form>
        <ul style="background-color: antiquewhite">
          ${content}
        </ul>
      </body>
    </html>
  `

  return res.send(htmlBase);
});

app.post('/cats', async  (req, res, next) => {
  const { name, age } = req.body;
  console.log(name, age);

  try {
    await connection.execute(`
      INSERT INTO live_lecture_31_1.cats (name, age) VALUES (?, ?)
    `, [name, age]);

    return res.send(`<h2>Seu gatito foi registrado com sucesso!</h2><a href='/cats'>Voltar</a>`);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('<h2>Seu gatito não foi registrado!</h2>');
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))