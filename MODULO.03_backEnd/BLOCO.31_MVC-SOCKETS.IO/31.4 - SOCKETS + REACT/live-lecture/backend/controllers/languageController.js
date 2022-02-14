const { Router } = require('express');

const Language = require('../models/languageModel');

const router = Router();

router.get('/', async (req, res) => {
  const languages = await Language.getAll();

  return res.status(200).json(languages);
});

module.exports = router;