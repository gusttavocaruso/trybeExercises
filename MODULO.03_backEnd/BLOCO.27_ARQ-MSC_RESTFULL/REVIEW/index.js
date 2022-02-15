const express = require('express');
const router = require('./routes');
const errorMd = require('./middlewares/error');

const app = express();
const port = 3000;
app.use(express.json());

app.use(router);
app.use(errorMd);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
