DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);



-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
INSERT INTO Pixar.Movies
(title, director, year, length_minutes)
VALUES
('Monstros SA', 'Pete Docter', '2001', '92'),
('Procurando o Nemo', 'John Lasseter', '2003', '107'),
('Os Incríveis', 'Brad Bird', '2004', '107'),
('WALL-E', 'Pete Docter', '2008', '104');


-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .
SELECT * FROM Pixar.BoxOffice;

INSERT INTO Pixar.BoxOffice
(movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);


-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .
SET SQL_SAFE_UPDATES = 0;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';


-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
UPDATE Movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';


-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);


-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E". P.S.: Lembrando que existe uma relação de Primary key-Foreign Key, portanto devemos excluir primeiro a referencia da tabela BoxOffice, para depois exluir da tabela Movies.
DELETE FROM BoxOffice
WHERE movie_id = 11; -- este é o id do filme WALL-E

DELETE FROM Movies 
WHERE title = 'WALL-E';


-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
SELECT id FROM Movies
WHERE director = 'Andrew Staton';
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 9)

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);
 
DELETE FROM Movies
WHERE director = 'Andrew Staton';


-- Exercício 8 : Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;


-- Exercício 9 : Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;


-- Exercício 10 : Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT id, length_minutes FROM Movies
WHERE length_minutes < 100;
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos

 DELETE FROM BoxOffice
 WHERE movie_id IN (1, 6, 7, 8);
 
DELETE FROM Movies
WHERE length_minutes < 100;