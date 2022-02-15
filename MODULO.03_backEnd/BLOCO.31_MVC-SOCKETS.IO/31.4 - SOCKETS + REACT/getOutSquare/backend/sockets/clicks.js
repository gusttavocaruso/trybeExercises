const { position } = require('../controllers/positionController');


module.exports = (io) => io.on('connection', (socket) => {

  socket.on('radomNewPosition',  () => {
    const squarePosition = position();
    io.emit('refreshNewPosition', squarePosition);
  })

}); 
