-- EXEMPLO VIDEO-AULA =======
USE soccer_player;
CREATE TABLE retired_players (
  player_id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45),
  CONSTRAINT PRIMARY KEY (player_id)
);

DELIMITER $$
CREATE TRIGGER retiredPlayer
  AFTER DELETE ON player --player é uma tabela do soccer_player
  FOR EACH ROW
BEGIN
  INSERT INTO retired_players(player_id, `name`)
  VALUES(OLD.player_id, OLD.`name`);
END $$

DELIMITER ;

-- ============================
DELIMITER $$

CREATE TRIGGER nome_do_trigger
  [BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
  FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER ;
-- ============================

-- Exemplo de trigger para o INSERT ==== :
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;
--No trigger acima, o valor da coluna ultima_atualizacao está sendo definido para a data atual com o comando NOW() e, na sequência, definindo o valor da coluna acao para "INSERT". A palavra-chave NEW é utilizada para acessar e modificar as propriedades da tabela.
-- execute:
INSERT INTO perfil(saldo) VALUES (2500);
SELECT * FROM perfil;


-- Exemplo de trigger para o UPDATE :
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;
-- No Trigger acima, o valor da coluna ultima_atualizacao está sendo atualizado para a data atual com o comando NOW() e, na sequência, definindo o valor da coluna acao para "UPDATE". Novamente, a palavra-chave NEW é utilizada para acessar e modificar as propriedades da tabela.
-- execute:
UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;
SELECT * FROM perfil;



-- Exemplo de trigger para o DELETE :
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;
-- O trigger acima envia informações para a tabela log_perfil , dizendo qual foi o tipo da operação e o horário do ocorrido.
-- execute:
DELETE FROM perfil WHERE perfil_id = 1;
SELECT * FROM log_perfil;
