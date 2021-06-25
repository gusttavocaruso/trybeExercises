//  FUNÇ .MAP()

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

// ------ com for:
let fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
};
console.log(fullNames);

// ------ com .map():
fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNames);

