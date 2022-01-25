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
  - `git push heroku master`

#

### para consultar apps: `heroku apps`;
### para consultar logs: `heroku logs` ou `heroku logs --tail`
