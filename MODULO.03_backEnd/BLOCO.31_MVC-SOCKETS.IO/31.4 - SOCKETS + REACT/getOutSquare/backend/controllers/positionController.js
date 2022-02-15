const { Router } = require('express');
const positionRouter = Router();

const position = () => {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);

  return { x, y }
};

positionRouter.get('/', async (_req, res) => {
  const squarePosition = position();
  return res.status(200).json(squarePosition);
});

module.exports = { 
  positionRouter,
  position,
};
