const jwt = require('jsonwebtoken');

const API_SECRET = 'ABC123456';
const JWT_CONFIG = { expiresIn: 3600, algorithm: 'HS256' };

const genToken = (data) => {
  return jwt.sign({ data }, API_SECRET, JWT_CONFIG);
}

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { username } = decoded.data;
    return username;
  } catch (error) {
    console.log('FALHA NA VERIFICAÇÃO');
    return null;
  }
}

module.exports = {
  genToken,
  verifyToken
}