SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';

SELECT 'Gusta' AS name;
SELECT 'Gusta' AS nome, 'Caruso' AS sobrenome, 'Sorocaba' AS 'Cidade Natal', 29 AS idade;
SELECT 13 * 8;
SELECT now() AS 'Data Atual';

USE sakila;
SELECT * FROM actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'full name' FROM actor;

USE sakila;
SELECT * FROM film;
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;
SELECT CONCAT(title, ' ', rating) AS Classificação FROM film;

SELECT * FROM address;
SELECT CONCAT(address, ' ', district) AS Endereço FROM address;
