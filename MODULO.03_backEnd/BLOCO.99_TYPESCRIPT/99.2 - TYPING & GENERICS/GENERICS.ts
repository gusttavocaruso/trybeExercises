/*
Os Generics são modelos de código que você pode definir e reutilizar em toda a base de código, fornecem uma forma de informar a funções, classes ou interfaces que tipo você deseja usar ao chamá-las, além de nos ajudar a reduzir o uso do tipo any, que não é uma boa prática em TypeScript .
Por exemplo, vamos criar uma função de nome getArray que gera um array de itens do tipo any . */
function getArray(items : any[]) : any[] {
  return new Array().concat(items);
}

/*
Declaramos uma variável de nome numberArray chamando a função getArray e passando a ela um array de numbers , enquanto uma variável stringArray é declarada com um array de strings . Como o tipo any foi usado, não há nada que impeça o código de enviar um string para o numberArray ou um number para o stringArray 
 */
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25);
stringArray.push("Rabbits");
numberArray.push("isto não é um número");
stringArray.push(30);
console.log(numberArray);
// Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]


/*
E caso quisermos garantir que o TypeScript verifique e garanta que os valores sejam de um determinado tipo?
É nesse momento que os generics entram em cena. */
function getArrayTwo<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

/*
Os generics definem uma ou mais variáveis de tipo para identificar o tipo ou tipos que serão passados para o componente, colocados entre colchetes angulares (< >). T é um nome comumente usado para um generic , mas você pode nomeá-lo como desejar.
Após especificar a variável de tipo, você pode usá-la no lugar do tipo em parâmetros, no tipo de retorno ou em qualquer outro lugar na função em que você adicionaria uma anotação de tipo. 

Agora podemos criar declarações de variável para numberArray e stringArray atualizadas para chamar a função com o tipo desejado, o TypeScript impede que os itens inválidos sejam adicionados ao array .*/
let numberArray2 = getArrayTwo<number>([5, 10, 15, 20]);
numberArray2.push(25);
// numberArray2.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray2 = getArrayTwo<string>(["Cats", "Dogs", "Birds"]);
stringArray2.push("Rabbits");
// stringArray2.push(30); // Isto vai gerar um erro de compilação


// Podemos passar quantas variáveis de tipo for necessário para nossos componentes genéricos:
function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}
let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");


// Outra forma de uso comum para generics é com interfaces e classes :
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}
let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber2 = processor(100, "Olá");
// let returnString2 = processor("Olá", 100); // erro


class ProcessIdentity2<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity() : T {
    console.log(this._message);
    return this._value
  }
}

let processor2 = new ProcessIdentity2<number, string>(100, "Olá");
processor2.getIdentity();  // imprime "Olá" e retorna 100