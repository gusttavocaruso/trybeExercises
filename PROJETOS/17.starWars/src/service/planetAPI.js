const planetAPI = async () => {
  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(API).then((resp) => resp.json());
  return results;
};

export default planetAPI;
