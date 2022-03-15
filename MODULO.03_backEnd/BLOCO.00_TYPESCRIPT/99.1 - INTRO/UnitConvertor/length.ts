const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const makeError = (unity: string) => {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
};

const convert = (value: number, forUnity: string, toUnity: string): number  => {
  // se a unidade base não for válida
  if (!units.includes(forUnity)) makeError(forUnity);

  // se a unidade para a conversão não for válida
  if (!units.includes(toUnity)) makeError(toUnity);

  const forIndex = units.indexOf(forUnity);
  const toIndex = units.indexOf(toUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
};

console.log(convert(1, 'm', 'mm'));