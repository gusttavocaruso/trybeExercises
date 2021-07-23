const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(id1, id2 = []) {
  return species.filter((specie) =>
    (specie.id === id1 || specie.id === id2 ? specie : ''));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return !employeeName ? {}
    : employees.find(({ firstName, lastName }) =>
      firstName === employeeName
      || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(() =>
    id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
    || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
    || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    species.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  }
  return species.find((specie) =>
    specie.name === animal).residents.length;
}

function calculateEntry(entrants = 0) {
  return (!entrants === {}) ? 0
    : Object.keys(entrants).reduce((acc, entrant) =>
      acc + (entrants[entrant] * prices[entrant]), 0);
}

function getAnimalMap(options) {
  // HARD
}

function getSchedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  return (!dayName) ? days
    : { [dayName]: days[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employeeResponse = employees.find((employee) =>
    employee.id === id).responsibleFor;

  const animalResponse = species.find((specie) =>
    specie.id === employeeResponse[0]).residents;

  const animalOldest = animalResponse.sort((a, b) =>
    b.age - a.age)[0];

  return Object.values(animalOldest);
}

function increasePrices(percentage) {
  const percentual = 1 + (percentage / 100);

  prices.Adult = Math.round((prices.Adult * percentual) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * percentual) * 100) / 100;
  prices.Child = Math.round((prices.Child * percentual) * 100) / 100;

  return prices;
}

function getEmployeeCoverage(idOrName) {
  // HARD
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
