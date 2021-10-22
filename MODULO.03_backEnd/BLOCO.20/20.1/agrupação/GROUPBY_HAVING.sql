-- Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY , o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação

SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

-- Uma das formas como podemos utilizar o GROUP BY é agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir.
SELECT first_name FROM sakila.actor
GROUP BY first_name;

-- GROUP BY removerá duplicações, retornando apenas um valor da coluna usada no agrupamento.

-- Porém é mais comum utilizar o GROUP BY em conjunto com o AVG , MIN , MAX , SUM ou COUNT . Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT() . Assim, teremos uma informação mais fácil de ser compreendida.
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

--  vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, através alguns exemplos feitos com o nosso banco de dados sakila .
-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.

-- A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING , para que somente os nomes que estão cadastrados duas ou mais vezes sejam exibidos.
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- É importante entender que quando usamos o HAVING estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.
