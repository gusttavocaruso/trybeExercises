### iniciar projeto - `npm init -y`;

### criar configurações básicas projeto => 
  - criar arq. `index.js` com `node-express`;
  - criar variavel port da seguinte maneira: `const PORT = process.env.PORT || 3000`;
  - criar script `"start"` com `"node index.js"` no package.json;

### iniciar git na pasta - `git init`

### logar no heroku - `heroku login`

### criar app heroku - `heroku create 'nome-app-unico'`

### após alterações, dar push no heroku com os comandos:
  - `git add .`,
  - `git commit -m "msg de commit"`,
  - `git push heroku master` (aqui o heroku é o nome do remote que vc quer o push)

#

### para consultar apps: `heroku apps`;
### para consultar logs: `heroku logs` ou `heroku logs --tail`
### para consultar remotes: `git remote -v`
### para mudar nome do remote: `git remote rename "nome-antigo" "nome-novo"`
### para criar novo heroku-app com remote nomeado `heroku create --remote "nome-qlqr"`
### exemplo de push para remote renomeado: `heroku push nome-qlqr master`
### criar variável de ambiente pelo CLI: `heroku config:set VARIAVEL='Varivel name' --app 'nome-app-unico'`
