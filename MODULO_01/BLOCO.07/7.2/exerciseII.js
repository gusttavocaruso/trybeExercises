const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const turnoNovo = {
  turno: 'manhã'
}
Object.assign(lesson2, turnoNovo);
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(Object.keys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.
// ??

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(Object.values(lesson3));

// 5. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 
// (sintaxe parece ok, porém, no console.log só add o último obj ao obj novo)
const allLessons = {};
Object.assign(allLessons, lesson1, lesson2, lesson3);
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// (o conflito no ex. anterior prejudica esse.. )
console.log(allLessons.numeroEstudantes);

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
// ex 
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
