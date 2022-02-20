const express = require('express');
const auth = require('./middlewares/auth');

const { getPosts } = require('./controllers/posts');
const { createUser } = require('./controllers/users');
const { login } = require('./controllers/login');
const { createProduct } = require('./controllers/product');

const app = express();
app.use(express.json());

app.get('/api/posts', auth, getPosts);
app.post('/api/users', createUser);
app.post('/api/product', auth, createProduct);
app.post('/api/login', login);

const PORT = 3000;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
