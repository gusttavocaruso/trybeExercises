/*
Exercício 4 : Crie uma classe Car cuja o objeto representará um carro.
Propriedades :
Deve conter uma propriedade do tipo string chamada brand que representa a marca.
Deve conter uma propriedade do tipo enum chamada color que representa a cor.
A cor pode ser: preta, branca, vermelha ou prata.
Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
Comportamentos :
Deve possuir um método chamado honk que aciona a buzina do carro.
Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
Deve possuir um método chamado turnOn que liga o carro.
Deve possuir um método chamado turnOff que desliga o carro.
Deve possuir um método chamado speedUp que acelera o carro.
Deve possuir um método chamado speedDown que reduz a velocidade do carro.
Deve possuir um método chamado stop que para o carro.
Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro. */

export enum Color {
  preta,
  branca,
  vermelha,
  prata,
}

export enum Directions {
  left,
  right,
}

export enum Doors {
  driver,
  ride,
  behind_drive,
  behind_ride,
}

export class Car {
  _brand: string;
  _color: Color;
  _doors: number; 

  constructor(brand: string, color: Color, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  turnOn(): void {
    console.log("Ligando carro.");
  }

  turnOff(): void {
    console.log("Desligando carro.");
  }

  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}.`);
  }

  speedUp(): void {
    console.log("Acelerando carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando carro.");
  }

  honk(): void {
    console.log("Buzinando: BIP BIP");
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta: ${door}.`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta: ${door}.`);
  }
}
