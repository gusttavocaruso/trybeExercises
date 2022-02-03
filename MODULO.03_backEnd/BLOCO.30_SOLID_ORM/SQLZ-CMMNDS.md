## comandos sequelize

`npx sequelize-cli init`
  - iniciar sequelize no projeto.
  - cria pastas: /config, /migrations, /seeders e /models
  - cria arquivo index.js em pasta /models
  - cria arquivo .json na pasta /config que vai referenciar usuario, senha e nome do banco de dados relacional que será utilizado

`npx sequelize-cli model:generate --name Product --attributes name:string, email:string, etc:etc`
  - cria dentro da pasta /models um arquivo nomeado com o valor passado na flag --name e recebe os atributos passados na flag --attributes
  - cria arquivo na pasta /migrations com um tipo de um 'schema' com as 'chaves' padrões (id, createAt, updateAt) + oq foi passado em --attributes.

`npx sequelize-cli db:migrate`
  - executa migrations criando tabela no DB indicado no arquivo /config/config.json

`npx sequelize-cli migration:generate --name create-column-price-product-table`
  - cria novo arquivo na pasta migration que cria coluna 'price'

`npx sequelize-cli db:migrate:undo`
  - reverte a ultima migration executada

`npx sequelize-cli seed:generate --name create-default-product`
  - cria arquivo na pasta seeders

`npx sequelize-cli db:seed:all`
  - executa seed criando no DB indicado no arquivo /config/config.json document referenciado no arquivo da pasta seeders
(seeders é mais usado para inserir no banco de dados arquivos 'default' para iniciar banco com dados)
