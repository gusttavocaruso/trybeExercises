SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECT * FROM sakila.actor;
SELECT DISTINCT(last_name) FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor
ORDER BY first_name DESC, last_name ASC;

SELECT * FROM sakila.language
LIMIT 5 OFFSET 1;

SELECT title, release_year, rental_duration, rating, replacement_cost
FROM sakila.film
ORDER BY rental_duration DESC, replacement_cost ASC
LIMIT 20;
