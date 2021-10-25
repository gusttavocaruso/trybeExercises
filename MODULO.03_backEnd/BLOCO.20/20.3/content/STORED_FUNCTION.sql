-- Stored functions podem ser executadas com o comando SELECT . Ao criá-las, temos que definir o tipo de retorno que sua função possui.


-- Tipos de retorno comuns:
DETERMINISTIC - Sempre retorna o mesmo valor ao receber os mesmos dados de entrada;

READS SQL DATA - Indica para o MySQL que sua função somente lerá dados.

-- Estrutura padrão de uma stored function =====
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;

-- Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:
SELECT MoviesWithActor(1);