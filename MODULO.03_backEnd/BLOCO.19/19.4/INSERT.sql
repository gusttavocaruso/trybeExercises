INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

-- Exercício 1: Insira um novo funcionário na tabela sakila.staff .
INSERT INTO sakila.staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Gust', 'alvo', 5, 'gusta@gmail.com', 2, 1, 'Gusta', 'onetwothree');
SELECT * FROM sakila.staff;

-- Exercício 2: Feito o exercício anterior, vamos agora para o nível 2. Insira 2 funcionários novos em apenas uma query .
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
    ('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');
SELECT * FROM sakila.staff;

-- Exercício 3: Selecione os 5 primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
	ORDER BY customer_id ASC
	LIMIT 5;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

-- Exercício 4: Cadastre 3 categorias de uma vez só na tabela sakila.category .
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
	VALUES ('Sci-Fi'), ('Fantasy'), ('Biography');
SELECT * FROM sakila.category;

-- Exercício 5: Cadastre 1 nova loja na tabela sakila.store .
SELECT * FROM sakila.store;
INSERT INTO sakila.store(manager_staff_id, address_id)
	VALUES(3, 3);
SELECT * FROM sakila.store;
