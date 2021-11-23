SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;


-- ex1 Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT t1.actor_id, CONCAT(t1.first_name, ' ', t1.last_name) AS name, t2.film_id
FROM sakila.actor AS t1
INNER JOIN sakila.film_actor AS t2
ON t1.actor_id = t2.actor_id;

-- ex2 Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT CONCAT(t1.first_name, ' ', t1.last_name) AS full_name, t2.address
FROM sakila.staff AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id;

-- ex3 Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT t1.customer_id, t1.first_name, last_name, t1.email, t2.address_id, t2.address
FROM sakila.customer AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id
ORDER BY first_name ASC, last_name ASC
LIMIT 100;

-- ex4 Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT t1.first_name, t1.last_name, t1.address_id, t2.address, t2.district
FROM sakila.customer AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id
WHERE t2.district = 'California'
AND t1.first_name LIKE '%rene%';

-- ex5 Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT t1.first_name, COUNT(t2.address) AS address_count
FROM sakila.customer AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id
WHERE t1.active = 1
GROUP BY t1.first_name
ORDER BY first_name DESC;

-- ex6 Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT stf.first_name, stf.last_name, ROUND(AVG(pay.amount), 2) AS `Média de pagamento`
FROM sakila.staff AS stf
INNER JOIN sakila.payment AS pay
ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY stf.first_name , stf.last_name;

-- ex7 Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT act.actor_id, act.first_name, flm.film_id, flm.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fact
	ON act.actor_id = fact.actor_id
INNER JOIN sakila.film AS flm
	ON flm.film_id = fact.film_id;
