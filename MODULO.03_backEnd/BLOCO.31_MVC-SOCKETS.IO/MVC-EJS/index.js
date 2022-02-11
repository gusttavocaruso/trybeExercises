const express = require('express')
const bodyParser = require('body-parser');

const { listCats, newCat, catDetails } = require('./controllers/catController');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/cats', listCats);
app.post('/cats', newCat);
app.get('/cats/:id', catDetails)

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}!`);
});