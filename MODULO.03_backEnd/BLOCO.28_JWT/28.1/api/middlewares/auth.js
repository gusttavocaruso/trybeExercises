const authService = require('../services/authService');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if(!authorization) return res.status(401)
      .json({ message: 'Token não informado' });

    const user = authService.verifyToken(authorization);
    if(!user) return res.status(401)
      .json({ message: "Token invalido" });

    req.user = user;
    next();
  } catch (error) {
    console.log(error.message)
    return res.status(401).json({ message: "Falha na autenticação" })
  }
}
