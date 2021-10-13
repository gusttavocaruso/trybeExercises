import { cocktailsAPIRequest, foodAPIRequest } from './APIrequest';

const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
export const filterByClickFood = async (
  radioFilter, inputFilter, setInputFilter, setDataFood,
) => {
  if (radioFilter === 'ingrediente') {
    const foodRequestI = await foodAPIRequest('filter', `i=${inputFilter}`);
    if (foodRequestI === null) {
      setInputFilter('');
      global.alert(alert);
    } else {
      setInputFilter('');
      setDataFood(foodRequestI);
    }
  }

  if (radioFilter === 'nome') {
    const foodRequestS = await foodAPIRequest('search', `s=${inputFilter}`);
    if (foodRequestS === null) {
      setInputFilter('');
      global.alert(alert);
    } else {
      setInputFilter('');
      setDataFood(foodRequestS);
    }
  }

  if (radioFilter === 'primeira-letra') {
    const foodRequestF = await foodAPIRequest('search', `f=${inputFilter}`);
    if (foodRequestF === null) {
      setInputFilter('');
      global.alert(alert);
    } else {
      setInputFilter('');
      setDataFood(foodRequestF);
    }
  }
};

export const filterByClickDrink = async (
  radioFilter, inputFilter, setInputFilter, setDataDrink,
) => {
  if (radioFilter === 'ingrediente') {
    const drinkRequestI = await cocktailsAPIRequest('filter', `i=${inputFilter}`);
    if (drinkRequestI === null) {
      setInputFilter('');
      global.alert(alert);
    } else {
      setInputFilter('');
      setDataDrink(drinkRequestI);
    }
  }

  if (radioFilter === 'nome') {
    const drinkRequestS = await cocktailsAPIRequest('search', `s=${inputFilter}`);
    if (drinkRequestS === null) {
      setInputFilter('');
      global.alert(alert);
    } else {
      setInputFilter('');
      setDataDrink(drinkRequestS);
    }
  }

  if (radioFilter === 'primeira-letra') {
    const drinkRequestF = await cocktailsAPIRequest('search', `f=${inputFilter}`);
    if (drinkRequestF === null) {
      setInputFilter('');
      global.alert(alert);
    } else {
      setInputFilter('');
      setDataDrink(drinkRequestF);
    }
  }
};
