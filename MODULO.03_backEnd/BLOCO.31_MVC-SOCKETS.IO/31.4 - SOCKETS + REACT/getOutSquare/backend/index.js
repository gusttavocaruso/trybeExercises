const app = require('express')();
const http = require('http').createServer(app);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const { positionRouter } = require('./controllers/positionController');
app.use('/square', positionRouter);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
  }
});
require('./sockets/clicks')(io);

// app.get('/', (req, res) => res.status(200).json({ ok: true })); ? ? ?
const PORT = 3001
http.listen(PORT, () => console.log(`On at: ${PORT}!`))