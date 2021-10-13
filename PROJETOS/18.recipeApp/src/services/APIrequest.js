export const foodAPIRequest = async (
  param1 = 'search',
  param2 = 's=',
  param3 = '?') => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/${param1}.php${param3}${param2}`;
    const { meals } = await fetch(url).then((result) => result.json());
    return meals;
  } catch (error) {
    console.log(error);
  }
};

export const cocktailsAPIRequest = async (
  param1 = 'search',
  param2 = 's=',
  param3 = '?') => {
  try {
    const url2 = `https://www.thecocktaildb.com/api/json/v1/1/${param1}.php${param3}${param2}`;
    const { drinks } = await fetch(url2).then((result) => result.json());
    return drinks;
  } catch (error) {
    console.log(error);
  }
};
