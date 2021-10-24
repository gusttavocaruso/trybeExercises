SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- TO FIX ==========
-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT A.title, A.rental_duration, B.title, B.rental_duration
FROM sakila.film AS A, sakila.film AS B
WHERE A.length = B.length
HAVING A.rental_duration BETWEEN 2 AND 4
AND B.rental_duration BETWEEN 2 AND 4;
