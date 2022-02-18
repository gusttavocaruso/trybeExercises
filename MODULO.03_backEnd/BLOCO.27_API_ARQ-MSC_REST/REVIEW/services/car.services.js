const { create } = require('../models/cars.models');
const joi = require('joi');

const carSchema = joi.object({
  marca: joi.string().min(3).required(),
  modelo: joi.string().required(),
  ano: joi.number().max(2022).required(),
  cor: joi.string().required(),
  placa: joi.string().required(),
});

const validadeCarSchema = ({ marca, modelo, ano, cor, placa }) => {
  const { error } = carSchema.validate({ marca, modelo, ano, cor, placa });
  if(error) throw { status: 400, message: error.message };
  return true;
}

const createCar = async (CAR) => {
  const dataValidate = validadeCarSchema(CAR);

  if (dataValidate) {
    const { id } = await create(CAR);
    return { message: `Car has been created with ID: ${ id }` };
  }
};

module.exports = {
  createCar,
};
