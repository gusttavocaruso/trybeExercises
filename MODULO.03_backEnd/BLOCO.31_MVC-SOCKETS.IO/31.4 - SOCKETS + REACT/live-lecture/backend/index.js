const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);

const LanguageController = require('./controllers/languageController');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
  }
});

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.status(200).json({ok: true}));

app.use('/languages', LanguageController);
require('./sockets/votes')(io); // qual o papel ? ? ? ?

const port = 3001
http.listen(port, () => console.log(`On ${port}!`))