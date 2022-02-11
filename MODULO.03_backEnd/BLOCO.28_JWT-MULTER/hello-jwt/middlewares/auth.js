const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const auth = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload

    return next()
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};

module.exports = {
  auth,
};
