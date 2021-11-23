// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .

// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// TESTE:
describe('getUserName async funcion test', () => {
  it('should show "Mark" when 4 is passed as a parameter', () => {
    return getUserName(4).then((data) => expect(data).toEqual('Mark'));
  })

  it('should show a Error when is set a invalid id as a parameter', () => {
    return getUserName(99).catch((error) => expect(error).toEqual({ error: 'User with 99 not found.' }))
  })
})
