const net = require('net');

const stdin = process.openStdin();

// criar um novo socket
const client = new net.Socket();

client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message);
  });
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('close', () => {
  console.log('Você saiu da sala.');
})