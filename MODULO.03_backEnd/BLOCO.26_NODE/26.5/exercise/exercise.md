A. Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:

  1. username deve ter mais de 3 caracteres; <br>
  2. email deve ter o formato email@mail.com;<br>
  3. password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);<br>
  4. Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" }<br>
  5. Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" }<br>

B. Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:

  1. O formato desse token retornado deve ser uma string aleatória com 12 caracteres;<br>
  2. O email recebido deve ter o formato email@mail.com;<br>
  3. O password deve conter no mínimo 4 caracteres e no máximo 8, todos números;<br>
  4. Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "email or password is incorrect" }<br>
  5. Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" }
