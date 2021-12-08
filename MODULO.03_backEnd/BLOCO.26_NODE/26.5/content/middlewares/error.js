const error = (err, req, res, next) => {

  console.log(err.message);

  //erro esperado
  // vou passar para o erro um status e uma menssagem
  if(err.status){
    return res.status(err.status).json({message: `${err.message}`});
  }

  //erro não esperado  
  return res.status(500).json({message: 'Internal Error'});
}

module.exports = error;