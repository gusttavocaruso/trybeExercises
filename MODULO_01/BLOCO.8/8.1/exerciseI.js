const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const newOne = (fullName) => {
  // codigo dessa func na resolução do Course em comentados:
  //   const email = fullName.toLowerCase().split(' ').join('_');
  //   return { fullName, email: `${email}@trybe.com` };
  const names = fullName.toLowerCase().split(' ');
  const firstName = names[0];
  const lastName = names[1];
  const obj = {
    nomeCompleto: fullName,
    email: `${firstName}_${lastName}@trybe.com`,
  };
  return obj;
};
console.log(newEmployees(newOne));
