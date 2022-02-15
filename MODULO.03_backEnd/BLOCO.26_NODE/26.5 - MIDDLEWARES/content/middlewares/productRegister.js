const productRegister = (req, res, next) => {
  const { name, price } = req.body;
  const { nome, email, age } = req;

  console.log(nome, email, age);

  if(!name) next({status: 400, message: "name not found"});

  if(price < 900) next({ status: 400, message: "Ta muito barato srsrs" });

  const product = {
    name,
    price,
  }

  return res.status(201).json(product);
};

module.exports = productRegister;