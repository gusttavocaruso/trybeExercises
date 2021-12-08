const products = [
  { id: 1, name: 'celular', price: 1000 }, 
  { id: 2, name: 'fone de ouvido', price: 50 }
];

const productList = (req, res, next) => {

  const { product } = req.query;
  const { id } = req.params;

  console.log(id, product);

  const result = products.find(( product ) => id == product.id );

  return res.status(200).json(result);

}

module.exports = productList;