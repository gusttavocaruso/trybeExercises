Para instalar o nodemon:

  npm i nodemon -D


O nodemon reinicia a aplicação toda vez que editamos e salvamos os nossos arquivos

Observe que passamos o parâmetro -D que indica ao npm que esse pacote deve ser instalado como uma dependência de desenvolvimento. Por enquanto, não precisamos nos preocupar com o que isso significa. Para poder automatizar o uso do nodemon, vamos abrir nosso arquivo package.json e adicionar a seguinte linha:

```javascript
...
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js"
 },
...
```

Agora, para executarmos nossa aplicação, vamos utilizar o seguinte comando:

  npm run dev


⚠️ Atenção ⚠️ Apesar de ser uma ferramenta muito útil para desenvolvimento, o Nodemon não deve ser utilizado para rodar a aplicação, pois caso seja disponibilizada para a pessoa usuária final (ou seja, em produção), podemos ter problemas de reinicialização da aplicação, devido ao fato de que qualquer alteração em qualquer arquivo afete a aplicação, fazendo com que toda ela seja reiniciada. Para executar uma aplicação em produção , deve-se utilizar o script start com o comando node index.js .
