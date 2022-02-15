const express = require('express');
const { Product } = require('../models'); //importando do arquivo index.js
const router = express.Router();

router.post('/', (req, res) => {
  const { name, description, price } = req.body;

  Product.create({ name, description, price })
    .then((newProduct) => {
      res.status(200).json(newProduct);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});
  
router.get('/', (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});
  
router.get('/:id', (req, res, next) => {
  Product.findByPk(req.params.id)
    .then((product) => {
      if (product === null) {
        res.status(404).send({ message: 'Produto não encontrado' });
      }

      res.status(200).json(product);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((products) => {
      res.status(200).send({ message: 'Produto excluído com sucesso.' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

router.put('/:id', (req, res) => {
  const { name, description, price } = req.body;

  Product.update(
    { name, description, price },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((products) => {
      res.status(200).send({ message: 'Produto atualizado com sucesso.' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;

