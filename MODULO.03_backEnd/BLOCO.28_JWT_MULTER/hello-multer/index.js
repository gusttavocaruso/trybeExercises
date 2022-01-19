const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '/uploads')));

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads/'),
  filename: (req, file, callback) => callback(null, file.originalname),
});

const upload = multer({ storage });


app.post('/files/upload', upload.single('abc'), (req, res) => {
  return res.status(200).json({ message: 'ok' });
})


const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
