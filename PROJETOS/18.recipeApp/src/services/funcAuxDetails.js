import copy from 'clipboard-copy';
import { foodAPIRequest, cocktailsAPIRequest } from './APIrequest';

export const getAPIdataID = async (id, setAlimentoDetail, tipo) => {
  const drinkRequest = await cocktailsAPIRequest('lookup', `i=${id}`);
  const foodRequest = await foodAPIRequest('lookup', `i=${id}`);

  const alimentoRequest = tipo === 'food' ? foodRequest : drinkRequest;

  setAlimentoDetail(...alimentoRequest);
};

export const alimentosSugestions = async (setAlimentoDetails, tipoSugerido) => {
  const SIX = 6;
  const drink = await cocktailsAPIRequest();
  const food = await foodAPIRequest();
  const alimento = tipoSugerido === 'meals' ? food : drink;
  const alimentoSix = alimento.slice(0, SIX);
  setAlimentoDetails(alimentoSix);
};

export const btnContinuar = (id, setBtnState, tipo) => {
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ meals: {}, cocktails: {} }));
  }
  const test = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const chaves = Object.keys(test[tipo]).some((chave) => chave === id);

  if (chaves) {
    setBtnState('Continuar Receita');
  }
};
export const btnFavoritar = (id, setBtnFavorite) => {
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([]));
  }
  const testFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const chavesFav = testFav.some((chave) => chave.id === id);

  if (chavesFav) {
    setBtnFavorite('isFavorite');
  }
};

export const ingredientMeasures = (obj, tipo) => {
  const keysOfApi = Object.keys(obj);
  if (tipo === 'medidas') {
    const measurementKeys = keysOfApi.filter((chave) => chave.includes('strMeasure'))
      .map((measure) => obj[measure])
      .filter((measure) => measure !== ' ' && measure !== null && measure !== '');
    return measurementKeys;
  }
  if (tipo === 'ingredientes') {
    const ingredientsKeys = keysOfApi.filter((chave) => chave.includes('strIngredient'));
    const ingredientsValues = ingredientsKeys
      .map((ingredient) => obj[ingredient])
      .filter((ingred) => ingred !== '' && ingred !== null && ingred !== '');
    return ingredientsValues;
  }
};

export const changeLocalRecipe = (id, tipo1, tipo2) => {
  if (localStorage.getItem('inProgressRecipes') === null) {
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ [tipo1]: { [id]: [] }, [tipo2]: {} }));
  } else if (!JSON.parse(localStorage.getItem('inProgressRecipes'))[tipo1][id]) {
    const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ ...recipes, [tipo1]: { ...recipes[tipo1], [id]: [] } }));
  }
};

export const changeLocalFavorite = (favInfo, btnFavorite, setBtnFavorite, id) => {
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favInfo]));
  }

  const favs = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const unFav = favs.filter((element) => element.id !== id);

  if (btnFavorite === 'isNotFavorite') {
    copy('isFavorite');
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...favs, favInfo]));
  } else {
    copy('isNotFavorite');
    localStorage.setItem('favoriteRecipes', JSON.stringify(unFav));
  }
  navigator.clipboard.readText().then(
    (clipText) => setBtnFavorite(clipText),
  );
};

export const changeLocalCheckDrink = (name, checked, id, checkedState) => {
  const localGet = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (localGet && localGet.cocktails[id]) {
    const ingredientsList = localGet.cocktails[id];
    if (checked) {
      localGet.cocktails[id] = [...ingredientsList, name];
      localStorage.setItem('inProgressRecipes', JSON.stringify(localGet));
      return ([...checkedState, name]);
    }
    const listFilter = ingredientsList.filter((ingredient) => ingredient !== name);
    localGet.cocktails[id] = listFilter;
    localStorage.setItem('inProgressRecipes', JSON.stringify(localGet));
    return (listFilter);
  }
};

export const changeLocalCheckFood = (name, checked, id, checkedState) => {
  const localGet = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (localGet && localGet.meals[id]) {
    const ingredientsList = localGet.meals[id];
    if (checked) {
      localGet.meals[id] = [...ingredientsList, name];
      localStorage.setItem('inProgressRecipes', JSON.stringify(localGet));
      return ([...checkedState, name]);
    }
    const listFilter = ingredientsList.filter((ingredient) => ingredient !== name);
    localGet.meals[id] = listFilter;
    localStorage.setItem('inProgressRecipes', JSON.stringify(localGet));
    return (listFilter);
  }
};
