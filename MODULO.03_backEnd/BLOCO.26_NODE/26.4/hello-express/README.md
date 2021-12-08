## No diretório do projeto
### no terminal
#
npm init -y

npm i express

touch index.js
#

**npm init -y** = inicializa o pacote node/ package.json

**npm i express** = instala o express

**touch index.js** = cria arquivo javascript que vai conter API

**node index.js** = roda


PADRÃO

```javascript
const express = require('express');

const app = express()
const PORT = 3000

app.use(express.json()); // faz um parse no body para JSON === bodyParser, nativo do express
// app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'Boas vindas'});
});

app.use(error); // chama sempre middleware de erro

app.listen(PORT, () => console.log(`O pai ta on na porta: ${PORT}!`))

```
