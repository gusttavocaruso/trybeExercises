const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const EXPRESS_PORT = 3000;
const SOCKETIO_PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const socketIoServer = require('http').createServer();

app.set('view engine', 'ejs');
app.set('views', './views');

// instanciando o server io na const 'io'
const io = require('socket.io')(socketIoServer, {
  cors: { 
    origin: `http://localhost:${EXPRESS_PORT}`, // origem permitida
    methods: ['GET', 'POST'], // métodos permitidos
  },
});

const NEWS = [];

io.on('connection', (socket) => {
  console.log(`Uma nova conexão com ${socket.id} foi estabelecida!`);

  socket.emit('news', NEWS);
});

app.get('/news', (_req, res) => res.render('board/news'));

app.post('/news', (req, res) => {
  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(422).json({ message: 'Missing title or message' });
  }

  io.emit('notification', { title, message });
  NEWS.push({ message, title });

  return res.status(200).json({ message: 'Notification emitted' });
});

app.listen(
  EXPRESS_PORT, 
  () => console.log(`Express App listening on port ${EXPRESS_PORT}!`),
);

socketIoServer.listen(
  SOCKETIO_PORT, console.log(`Socket.io Server listening on port ${SOCKETIO_PORT}!`),
);
