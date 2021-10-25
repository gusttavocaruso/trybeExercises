SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT M.title, B.domestic_sales, B.international_sales FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT M.title, B.domestic_sales, B.international_sales FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT M.title, B.rating FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
ORDER BY B.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.`name`, T.location, M.title, M.director, M.`year`, M.length_minutes
FROM Pixar.Theater AS T
  LEFT JOIN Pixar.Movies AS M 
  ON T.id = M.theater_id
ORDER BY T.`name` ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.id, T.`name`, T.location, M.title, M.director, M.`year`, M.length_minutes
FROM Pixar.Theater AS T
  RIGHT JOIN Pixar.Movies AS M 
  ON T.id = M.theater_id
ORDER BY T.`name` ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- SUBQUERY
SELECT title FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id FROM Pixar.BoxOffice
  WHERE rating > 7.5
);

-- INNER_JOIN
SELECT M.title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B 
ON B.movie_id = M.id
WHERE B.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
-- SUBQUERY
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (
  SELECT id FROM Pixar.Movies
  WHERE `year` > 2009
);

-- INNER_JOIN
SELECT B.rating FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M 
ON B.movie_id = M.id
WHERE M.`year` > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT T.`name`, T.location FROM Pixar.Theater AS T
WHERE EXISTS (
  SELECT * FROM Pixar.Movies AS M
  WHERE M.theater_id = T.id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT T.`name`, T.location FROM Pixar.Theater AS T
WHERE NOT EXISTS (
  SELECT * FROM Pixar.Movies AS M
  WHERE M.theater_id = T.id
);
