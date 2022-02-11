const Cats = require('../models/catModel');

const listCats = async (req, res, next) => {

  try { 
    const cats = await Cats.getAll();
    console.log(cats);
    if(cats.length === 0){
      return res.render('catList', { cats: '', message: 'Não existe nenhum gato cadastrado.'});  
    }

    return res.render('catList', { cats, message: '' });
  } catch(err){
    console.log(err.message);
  }
}

const newCat = async (req, res) => {
  const { name, age } = req.body;

  await Cats.add(name, age);

  return res.render('success');
};

const catDetails = async (req, res) => {
  const { id } = req.params;

  const [cat] = await Cats.getCatById(id);

  if (!cat) {
    return res.render('notFound');
  }

  // cat === { name: 'GATITO', age: 4 }
  console.log(cat);
  return res.render('catDetails', { cat });

};

module.exports = {
  listCats,
  newCat,
  catDetails
}