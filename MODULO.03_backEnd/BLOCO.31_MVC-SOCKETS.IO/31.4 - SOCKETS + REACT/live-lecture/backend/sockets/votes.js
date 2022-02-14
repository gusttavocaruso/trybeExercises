const Language = require('../models/languageModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('increaseVotes', async ({ id }) => {
    console.log(`Cliente votou na linguagem de id ${id}`);
    await Language.increaseVotes(id);
    const language = await Language.getById(id);
    
    io.emit('refreshCurrentVotes', language);
  })
}); 