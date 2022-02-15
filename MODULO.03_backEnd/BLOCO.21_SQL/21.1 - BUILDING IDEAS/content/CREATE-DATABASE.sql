-- CRIANDO BANCO DE DADOS =================

CREATE DATABASE IF NOT EXISTS nome_do_banco_de_dados;
-- Sinônimo de CREATE DATABASE === CREATE SCHEMA
-- O IF NOT EXISTS Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.

SHOW DATABASES;
-- Lista todos os bancos de dados existentes.


-- CRIANDO TABELA =================

-- SINTAXE
CREATE TABLE nome_tabela (
  coluna1 tipo constraint_A, constraint_B,
  coluna2 tipo constraint_B,
  colunaN tipo constraintA, constraint_C,
  CONSTRAINT PRIMARY KEY (coluna1),
  FOREIGN KEY (coluna2) REFERENCES nome_tabela2 (coluna2)
) [ENGINE=InnoDB;] -- Esse ENGINE é default do mySQL, por isso, o [] não precisa ser mecionado

-- REFERENCIANDO CONSTRAINTs
-- PRIMARY KEY & FOREIGN KEY =========
CREATE TABLE filme_ator(
    AtorId INTEGER,
    FilmeId INTEGER,
    CONSTRAINT PRIMARY KEY(AtorId, FilmeId),
    FOREIGN KEY (AtorId) REFERENCES Actor (Atorid),
    FOREIGN KEY (FilmeId) REFERENCES Filme (Filmeid)
);


-- EXEMPLO ====================
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade)
);
-- Foi criada uma chave primária simples utilizando o campo cidade 

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
      ('Rio Claro','RJ',17216);
-- No exemplo acima teremos um erro , pois há uma violação da chave primária, já que o nome "Rio Claro" será duplicado e isto não é permitido. A solução para o problema acima é criarmos uma chave primária composta . A chave composta é aquela criada com duas ou mais colunas e, desta forma, passa a utilizar a junção desses dados para formar um valor único e assim bloquear a duplicidade. Veja sua implementação no exemplo abaixo:
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade, estado)
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
      ('Rio Claro','RJ',17216);

-- A escolha na utilização de chaves primárias simples ou compostas para criar sua tabela depende da situação. No exemplo acima, faz mais sentido criar um campo id e utilizá-lo como chave primária simples , assim fica mais fácil fazer os relacionamentos com outras tabelas e utilizar operadores de busca pois você usará apenas o campo id .
DROP TABLE cidades; 
-- Apagar a versão antiga da tabela
CREATE TABLE cidades(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
      ('Rio Claro','RJ',17216);
