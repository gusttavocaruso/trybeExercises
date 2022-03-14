/* 
Type Aliases
(apelidos de tipos) são utilizados para declarar a forma de um objeto nomeando o tipo, o que nos permite usar o mesmo tipo mais de uma vez e nos referir a ele através de um único nome. Um type alias é exatamente isso: um nome para qualquer tipo.
Para criar um type alias utilizamos a seguinte sintaxe:
*/

type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100


/**
Type Unions
(união de tipos) é uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Para isso, é preciso declarar os tipos esperados separados por barras.
 */

function retornarCPF(cpf: number | string) {
  console.log("Seu CPF é: " + cpf);
}
