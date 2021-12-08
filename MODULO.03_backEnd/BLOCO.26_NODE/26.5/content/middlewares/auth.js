const auth = (req, res, next) => {
  const { token } = req.headers;

  // saiuh3ui15981ysajipfj197t4816giasd96791hf
  // nome: "guilher"
  // age: 26
  // email: gui100%vidaloka@hotmail.com

  if(!token) next ({ status: 401, message: 'Token not found'});
  if(token !== 'admin') next ({ status: 403, message: 'Not authorized'});

  req.nome = 'guilher'
  req.age = 26
  req.email = 'gui100%vidaloka@hotmail.com'

  next();
}

module.exports = auth; 