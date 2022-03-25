## - Atividade 1:

### Objetivos:

Criar um CRUD completo de pessoas usuárias de uma aplicação.

Permitir que pessoas usuárias dessa aplicação façam login utilizando suas credenciais.

### Rotas:

Uma rota que lista todos as pessoas usuárias da aplicação;

Uma rota que lista uma única pessoa usuária a partir de seu id ;

Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;

Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu id ;

Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu id .

### Regras:

Uma pessoa usuária da aplicação deve possuir as propriedades id , nome, email e senha;

Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;

O id deve ser gerado automaticamente;

A senha deve possuir no mínimo 6 e no máximo 12 caracteres;

O nome deve possuir pelo menos 3 caracteres;

O email deve possuir um formato de email válido (email@email.com);

Ao criar um novo user , o email não pode já estar cadastrado.

## - Atividade 2:

### Objetivos:

Criar um CRUD completo de Blog Posts .

Listar posts por autor, categoria ou data de criação.

### Rotas:

Uma rota que lista todos os posts;

Uma rota que lista um único post por meio de seu id ;

Uma rota que permite cadastrar um novo post;

Uma rota que permite editar o registro de um post cadastrado a partir de seu id ;

Uma rota que permite deletar um post a partir de seu id .

Uma rota que recebe via query params o autor, a categoria ou a data de criação e lista todos os posts que se encaixem no filtro;

### Regras:

Um post deve possuir as propriedades id , título, nome do autor, nome da categoria e data de criação;

Nenhuma propriedade de um post pode ser nula ou vazia;

O nome do autor deve possuir pelo menos 3 caracteres;

A nome da categoria deve possuir pelo menos 3 caracteres;

A query param de data de criação deve ser no formato: aaaa-mm-dd;

## - Atividade 3:

### Objetivos:

Criar um CRUD completo de produtos.

Listar os produtos por faixa de preço.

Listar os produtos que ainda não estão vencidos.

### Rotas:

Uma rota que lista todos os produtos;

Uma rota que lista um único produto por meio de seu id ;

Uma rota que permite cadastrar um novo produto;

Uma rota que permite editar o registro de um produto cadastrado;

Uma rota que permite deletar um produto a partir de seu id .

Uma rota que recebe via query params um preço inicial e final e listar todos produtos que se encaixem no filtro;

Uma rota que lista somente os produtos que ainda não estão vencidos;

### Regras:

Um produto deve possuir as propriedades id , nome, nome da marca, preço, data de fabricação e data de validade;

Nenhuma propriedade de um produto pode ser nula ou vazia;

O nome da marca deve possuir pelo menos 3 caracteres;

O preço não pode receber um valor negativo;

A data de fabricação não pode ser igual a data de validade;

As query params de valor de preço inicial e final não podem receber valores negativos;

## - Atividade 4:

### Objetivos:

Criar um CRUD completo de restaurantes.

Listar restaurantes que estão abertos.

### Rotas:

Uma rota que lista todos os restaurantes;

Uma rota que lista um único restaurante por meio de seu id ;

Uma rota que permite cadastrar um novo restaurante;

Uma rota que permite editar o registro de um restaurante cadastrado;

Uma rota que permite deletar um restaurante a partir de seu id .

Uma rota que lista somente os restaurantes que estão abertos no momento da chamada;

### Regras:

Um restaurante deve possuir as propriedades id , nome, tipo de comida que serve, horário da abertura e horário do fechamento;

Nenhuma propriedade de um restaurante pode ser nula ou vazia;

O nome deve possuir pelo menos 3 caracteres;

O tipo de comida deve possuir no mínimo 3 caracteres;

