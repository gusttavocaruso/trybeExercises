// Ao chamar a função doingThings:

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakingUp = () => console.log('Acordando!');
const drinkCoffee = () => console.log('Bora tomar café!');
const letSleep = () => console.log('Partiu dormir!');

const doingThings = (thing) => thing();

console.log(doingThings(wakingUp));
console.log(doingThings(drinkCoffee));
console.log(doingThings(letSleep));
