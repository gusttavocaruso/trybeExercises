const net = require('net');
const port = 2708;

// as pessoas que estão conectadas (sockets)
const sockets = [];

// nickname
let guestId = 0;

const server = net.createServer((socket) => {
  // console.log(socket);
  guestId++;

  // Guest N
  socket.guest = 'Guest ' + guestId;
  
  socket.write('Boas vindas :) ');
  
  sockets.push(socket);

  disparo(socket.guest, socket.guest + ' acabou de se conectar');

  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);
    const message = socket.guest + ' deixou o chat :(';

    disparo(socket.guest, message);
  });

  socket.on('data', (data) => {

    const message = socket.guest + '>' + data.toString();

    disparo(socket.guest, message);
  });
});

const disparo = (from, message) => {
  sockets.forEach((socket) => {
    //quero validar de que eu n vou enviar a msg p quem acabou de se desconectar
    if(socket.guest === from) return;

    socket.write(message);

  });
};

server.listen(port, () => {
  console.log('Pai ta on');
});