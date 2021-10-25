-- Tipos de STORED PROCEDURES =======
Procedure sem parâmetros;
Procedure com parâmetros de entrada (IN) ;
Procedure com parâmetros de saída (OUT) ;
Procedure com parâmetros de entrada e saída (IN-OUT) .


-- Estrutura padrão de uma stored procedure ========

USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário


-- Procedure sem parâmetros:
-- Normalmente é utilizada para realizar queries mais simples.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
  SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:
CALL ShowAllActors();


-- Procedure com parâmetros de entrada (IN):
-- Para criar procedures com funcionalidades mais elaboradas, podemos passar parâmetros de entrada. Ao definir um parâmetro do tipo IN , podemos usá-lo e modificá-lo dentro da nossa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:
CALL ShowActorsWithSyllable('lope');



-- Procedure com parâmetros de saida (OUT):
-- O parâmetro OUT é útil quando você precisa que algo seja avaliado ou encontrado dentro de uma query e te retorne esse valor para que algo adicional possa ser feito com ele.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:
CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;



-- Procedure com parâmetros de entrada-saida (IN-OUT):
-- O IN-OUT deve ser usado quando é necessário que um parâmetro possa ser modificado tanto antes como durante a execução de uma procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:
SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;
