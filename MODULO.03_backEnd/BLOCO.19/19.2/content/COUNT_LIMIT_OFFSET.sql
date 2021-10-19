USE sakila;

SELECT * FROM sakila.staff;
SELECT COUNT(DISTINCT password) FROM sakila.staff;
SELECT COUNT(*) FROM staff;
SELECT COUNT(email) FROM staff;

SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM rental LIMIT 10;

SELECT * FROM rental LIMIT 10 OFFSET 3;