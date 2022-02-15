fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});

/*
Diferente do que fizemos para fazer uma requisição do tipo GET , dessa vez passamos um segundo parâmetro que é um objeto formado pelos atributos method , headers , body . Vamos entender o que é cada um.

  method : Método HTTP utilizado, como vimos no primeiro bloco temos 4 que são mais utilizados (GET, POST, PUT e DELETE).

  headers : Define algumas i nformações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON.

  body : É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que quermos enviar para uma string JSON. Por isso que do lado do nosso back-end precisamos utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.

Não é possível fazer requisições POST diretamente pelo navegador como fizemos para requisição para rota GET /recipes . Por isso devemos utilizar aplicações como o Insomnia ou Postman para fazer requisições de qualquer tipo diferente do GET */
