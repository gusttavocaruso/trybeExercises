-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT M.id, M.title, M.director, M.`year`, M.length_minutes, M.theater_id
FROM Pixar.Movies AS M
INNER JOIN BoxOffice AS B
ON B.movie_id = M.id
WHERE B.rating > 8
AND M.theater_id IS NOT NULL;


-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director
AND t1.title != t2.title;


-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
-- SUBQUERY
SELECT M.title FROM Pixar.Movies AS M
WHERE M.id IN (
  SELECT B.movie_id FROM Pixar.BoxOffice AS B
  WHERE B.international_sales >= 500000000
)
AND M.length_minutes > 110;

-- INNER_JOIN
SELECT M.title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE B.international_sales >= 500000000
AND M.length_minutes > 110;

