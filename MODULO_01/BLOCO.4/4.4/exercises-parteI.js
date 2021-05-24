let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

// // EX1
// console.log(`Bem-vinda, ${info.personagem}`);

// // EX2
info.recorrente = 'Sim';
// console.log(info);

// // EX3
// for (let k in info) {
//   console.log(k);
// }

// // EX4
// for (let j in info) {
//   console.log(info[j]);
// }

// EX5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

// --- Valor esperado:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!