const joi = require('joi');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const validateBody = (body) => {
  const bodySchema = joi.object({
    username: joi.string().min(5).alphanum().required(),
    password: joi.string().min(5).required(),
  })
  return bodySchema.validate(body);
}

const login = async (req, res, next) => {
  const { error } = validateBody(req.body);
  if (error) return next(error);

  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin };
  const jwtConf = { expiresIn: '1h' };

  const token = jwt.sign(payload, JWT_SECRET, jwtConf);

  return res.status(200).json({ token });
};

module.exports = {
  login
};
