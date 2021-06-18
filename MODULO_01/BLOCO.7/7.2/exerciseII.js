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

// 1.
const turnoNovo = {
  turno: 'manhã'
}
Object.assign(lesson2, turnoNovo);
console.log(lesson2);

// 2.
console.log(Object.keys(lesson1));

// 3.
// ??

// 4.
console.log(Object.values(lesson3));

// 5. (sintaxe parece ok, porém, no console.log só add o último obj ao obj novo)
const allLessons = {};
Object.assign(allLessons, lesson1, lesson2, lesson3);
console.log(allLessons);

// 6. (o conflito no ex. anterior prejudica esse.. )
console.log(allLessons.numeroEstudantes);