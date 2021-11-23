-- Ao executar o bloco de código abaixo, a tabela noticia será criada. Essa tabela será utilizada como exemplo para testar modificações em sua estrutura.
USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
);
SELECT * FROM sakila.noticia;
SHOW COLUMNS FROM sakila.noticia;

-- Abaixo, algumas das alterações que podem ser feitas em uma tabela. =====

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;


-- Para confirmar se a estrutura da sua tabela foi alterada corretamente, você pode usar o comando SHOW COLUMNS FROM nome_da_tabela; . Veja o exemplo abaixo:
SHOW COLUMNS FROM sakila.noticia;