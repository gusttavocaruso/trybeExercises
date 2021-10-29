-- Desafios sobre VIEW ===============

-- ex1 Crie uma view chamada film_with_categories utilizando as tabelas
-- category , film_category e film do banco de dados sakila.
-- Essa view deve exibir o título do filme, 
-- o id da categoria e o nome da categoria.
-- Os resultados devem ser ordenados pelo título do filme.
USE sakila;

CREATE VIEW film_with AS
  SELECT 
    F.title AS title,
    FC.category_id AS category_id,
    C.name AS name
  FROM
    film AS F
      INNER JOIN
    film_category AS FC ON F.film_id = FC.film_id
      INNER JOIN
    category AS C ON FC.category_id = C.category_id
ORDER BY title ASC;
        
SELECT * FROM film_with;

-- ex2 Crie uma view chamada film_info utilizando as tabelas 
-- actor , film_actor e film do banco de dados sakila .
-- Sua view deve exibir o actor_id , o nome completo do ator ou da atriz
-- em uma coluna com o ALIAS actor e o título dos filmes.
-- Os resultados devem ser ordenados pelos nomes de atores e atrizes.
USE sakila;

CREATE VIEW film_info AS
  SELECT 
    A.actor_id AS actor_id,
    CONCAT(A.first_name, ' ', A.last_name) AS actor,
    F.title AS title
  FROM
    actor AS A
      INNER JOIN
    film_actor AS FA ON A.actor_id = FA.actor_id
      INNER JOIN
    film AS F ON F.film_id = FA.film_id
  ORDER BY CONCAT(A.first_name, ' ', A.last_name) ASC;

SELECT * FROM film_info;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id, o address, o district, o city_id e a city . 
-- Os resultados devem ser ordenados pelo nome das cidades
USE sakila;

CREATE VIEW address_info AS
  SELECT 
    A.address_id, A.address, A.district, C.city_id, C.city
  FROM
    address AS A
      INNER JOIN
    city AS C ON A.city_id = C.city_id
  ORDER BY C.city ASC;
    
SELECT * FROM address_info;

-- ex4 Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila.
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme
USE sakila;

CREATE VIEW movies_languages AS
  SELECT 
    F.title, L.language_id, L.`name` AS `language`
  FROM
    film AS F
      INNER JOIN
    `language` AS L ON F.language_id = L.language_id;
        
SELECT * FROM movies_languages;
