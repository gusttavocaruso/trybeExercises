/**
 * No TypeScript , as classes são uma maneira de definir a forma de um objeto, podemos considerar uma classe como um projeto para a criação de objetos. Uma classe Person descreve os atributos de uma pessoa, por exemplo, nome, data de nascimento ou cor dos olhos. Ela também descreve ações que uma pessoa pode executar, como falar, comer ou andar.
Mas a classe Person é apenas um plano para a criação de uma pessoa. Você deve criar uma instância de pessoa da classe Person antes que ela se torne um objeto ao qual você possa atribuir valores de propriedade (como definir a cor dos olhos como azul) ou chamar suas ações (como falar).
 */

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor: EyeColor;

  // considere o constructor() como uma função utilizada para construir um objeto a partir da classe, nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    this.name  = name;
    this.birthDate  = birthDate;
    this.eyeColor  = eyeColor;
  }
  // usamos o this para acessar as propriedades da instância da classe
  // ele representa a própria instância que estamos criando
  // atribuimos o valor do parâmetro recebido a propriedade da instância da classe

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  }
}

/**
 * A classe Person pode ser reutilizada para criar qualquer quantidade de novos objetos Person , cada um com suas próprias características.
 usamos a palavra reservada new para criar uma instância de Person
 e passamos os parâmetros necessários para o construtor
 */

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
/*
saída:
Person: {
  "name": "Jane Doe",
  "birthDate": "1986-01-01T00:00:00.000Z",
  "eyeColor": "Castanhos"
}
 */

person1.speak()
// "Jane Doe está falando."

console.log(person2);
/*
saída:
Person: {
  "name": "Jon Doe",
  "birthDate": "1980-08-05T00:00:00.000Z",
  "eyeColor": "Pretos"
}
 */

person2.walk();
// "Jon Doe está andando."


// OUTRO EXEMPLO ========
interface Hero {
  _name: string,
  _power: string,
  falarFraseInspiradora(phrase: string): string,
}

class Hero {
  constructor(name: string, power: string) {
      this._name = name;
      this._power = power;
  }

  falarFraseInspiradora(phrase: string) {
      return `${this._name} diz: ${phrase}`
  }   
}

const Hero1 = new Hero('Martin Luther King', 'Dar exemplo');
const Hero2 = new Hero('Nina Simone', 'Dar exemplo');

const makeHero1Phrase = Hero1.falarFraseInspiradora('Blabla bla');
const makeHero2Phrase = Hero2.falarFraseInspiradora('Bleble ble');

console.log(makeHero1Phrase); // "Martin Luther King diz: Blabla bla"
console.log(makeHero2Phrase); // "Nina Simone diz: Bleble ble"
