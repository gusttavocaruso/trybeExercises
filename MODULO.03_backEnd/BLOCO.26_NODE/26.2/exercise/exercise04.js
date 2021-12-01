const fs = require('fs').promises;

/* ===============>

// Exercicio 04 Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.

// 4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson
async function main() {
  try {
    const responseString = await fs.readFile('simpsons.json', "utf8");
    const responseParse = JSON.parse(responseString)
    responseParse.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    })
  } catch(err) {
    console.log(err);
  }
}
main();


// 4.2 Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
function findCharacter(data, input_id) {
  return new Promise((resolve, reject) => {
    const character = data.find(({id}) => input_id === parseInt(id));
    if (!character) reject(new Error("id não encontrado"))
    resolve(character)
  })
}

async function main(input_id) {
  try {
    const responseString = await fs.readFile('simpsons.json', "utf8");
    const responseParse = JSON.parse(responseString);
    const character = await findCharacter(responseParse, input_id);
    console.log(character);
  } catch(err) {
    console.log(err);
  }
}
const id = 10
main(id);

// 4.3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
function deleteId(data, input_id) {
  let newJSON = data; 
  input_id.forEach((element) => {
    newJSON = newJSON.filter(({id}) => element !== parseInt(id))
  });
   return newJSON;
}

async function main(input_id) {
  try {
    const responseString = await fs.readFile('simpsons.json', "utf8");
    const responseParse = JSON.parse(responseString);
    const filteredArray = deleteId(responseParse, input_id);
    const filteredArrayString = JSON.stringify(filteredArray)
    fs.writeFile('simpsons.json', filteredArrayString);
  } catch(err) {
    console.log(err);
  }
}
const id = [10, 6]
main(id);

// 4.4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
function filterArray(data) {
  let newJSON = [];
  for (let i = 1; i <= 4; i += 1) {
    newJSON.push(...data.filter(({id}) => parseInt(id) === i))
  }
  return newJSON
}

async function main() {
  try {
    const responseString = await fs.readFile('simpsons.json', "utf8");
    const responseParse = JSON.parse(responseString);
    const filteredArray = filterArray(responseParse);
    const filteredArrayString = JSON.stringify(filteredArray)
    fs.writeFile('simpsonFamily.json', filteredArrayString);
  } catch(err) {
    console.log(err);
  }
}
main();

<============== */ 

// 4.5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
function filterArray(data) {
  let newJSON = [];
  for (let i = 1; i <= 4; i += 1) {
    newJSON.push(...data.filter(({id}) => parseInt(id) === i))
  }
  return newJSON
}

async function main() {
  try {
    const responseString = await fs.readFile('simpsonFamily.json', "utf8");
    const responseParse = JSON.parse(responseString);
    const filteredArray = filterArray(responseParse);
    const filteredArrayString = JSON.stringify(filteredArray)
    fs.writeFile('simpsonFamily.json', filteredArrayString);
  } catch(err) {
    console.log(err);
  }
}
main();

// 4.6 Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
