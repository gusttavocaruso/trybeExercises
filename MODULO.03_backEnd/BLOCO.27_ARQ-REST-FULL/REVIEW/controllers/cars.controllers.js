const { createCar } = require('../services/car.services');

const carCreate = async (req, res, _next) => {
  try {
    const CAR = req.body;
    const newCar = await createCar(CAR);
    return res.status(200).json(newCar);
  } catch (error) {
    console.log(`POST CREATECAR -> ${error.message}`);
    return _next(error)
  }
};

module.exports = {
  carCreate,
};
