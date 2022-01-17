let id = 1

const createProduct = (req, res) => {
  const { name } = req.body;
  const username = req.user;
  res.status(200).send({_id: id, name, user: username });
  id++;
}

module.exports = { createProduct };