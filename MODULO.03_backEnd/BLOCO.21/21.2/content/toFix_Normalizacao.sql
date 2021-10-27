CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE Setor (
    setor_id INT primary key,
    nome VARCHAR(100)
);

INSERT INTO Setor(setor_id, nome) VALUES(1, 'Administração');
INSERT INTO Setor(setor_id, nome) VALUES (2, 'Vendas');
INSERT INTO Setor(setor_id, nome) VALUES(3, 'Operacional');
INSERT INTO Setor(setor_id, nome) VALUES(4, 'Estratégico');
INSERT INTO Setor(setor_id, nome) VALUES(5, 'Marketing');

CREATE TABLE Funcionarios (
    funcionario_id INT primary key,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    contato VARCHAR(100),
    telefone VARCHAR(100),
    data_cadastro VARCHAR(100)
);

INSERT INTO Funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
INSERT INTO Funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
INSERT INTO Funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
INSERT INTO Funcionarios (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE Funcionario_Setor (
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    foreign key (funcionario_id) references funcionario(funcionario_id),
    foreign key (setor_id) references setor(setor_id)
);

INSERT INTO Funcionario_Setor (funcionario_id, setor_id) VALUES(12, 1);
INSERT INTO Funcionario_Setor (funcionario_id, setor_id) VALUES(12, 2);
INSERT INTO Funcionario_Setor (funcionario_id, setor_id) VALUES(13, 3);
INSERT INTO Funcionario_Setor (funcionario_id, setor_id) VALUES(14, 4);
INSERT INTO Funcionario_Setor (funcionario_id, setor_id) VALUES(14, 2);
INSERT INTO Funcionario_Setor (funcionario_id, setor_id) VALUES(15, 5);
