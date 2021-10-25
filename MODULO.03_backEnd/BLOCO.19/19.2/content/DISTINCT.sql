CREATE DATABASE `Escola`;

CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);

INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

    USE Escola;
SELECT * FROM Alunos;
SELECT DISTINCT Nome, Idade FROM Alunos;
SELECT DISTINCT Nome FROM Alunos;
SELECT DISTINCT Idade FROM Alunos;
