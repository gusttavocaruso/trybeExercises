// função responsavel pelo requisito numero 3
const logBtn = document.getElementById('log-btn');
const agreeCheck = document.querySelector('#agreement');
const sendButton = document.querySelector('#submit-btn');

logBtn.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Habilita/Desabilita Botão
agreeCheck.addEventListener('click', () => {
  if (agreeCheck.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
});
