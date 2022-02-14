const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);

const LanguageController = require('./controllers/languageController');

// instanciado na linha 1
// const app = express()

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
  }
});


const port = 3001

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

// GET /languages
// POST /languages
// PUT /languages
app.use('/languages', LanguageController);

require('./sockets/votes')(io); // qual o papel ? ? ? ?

http.listen(port, () => console.log(`Example app listening on port ${port}!`))