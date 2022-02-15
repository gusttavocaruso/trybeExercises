-- ex1. Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
Nome;
Espécie;
Sexo;
Idade;
Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.


-- CRIANDO TABELAS 
-- E INSERINDO VALORES ===
CREATE DATABASE IF NOT EXISTS ZOO;
USE ZOO;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Especie (
  especie_id INT PRIMARY KEY AUTO_INCREMENT,
    especie_name VARCHAR(45)
);
INSERT INTO
  Especie(especie_id, especie_name)
  VALUES
    (1, 'Primata');
    
CREATE TABLE Gerente (
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  gerente_fullName VARCHAR(45)
);
INSERT INTO 
  Gerente(gerente_id, gerente_fullName)
    VALUES(1, 'Gerentão');

CREATE TABLE Cuidador (
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  cuidador_fullName VARCHAR(45),
  gerente_id INT,
  CONSTRAINT FOREIGN KEY (gerente_id)
    REFERENCES Gerente (gerente_id)
);
INSERT INTO
	Cuidador(cuidador_id, cuidador_fullName, gerente_id)
  VALUES
		(1, 'Gustavão', 1),
    (2, 'Deborínha', 1);

CREATE TABLE Animais (
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  animal_name VARCHAR(45) NOT NULL,
  animal_from VARCHAR(45),
  animal_sex VARCHAR(45),
  animal_age INT,
  especie_id INT,
  CONSTRAINT FOREIGN KEY (especie_id)
    REFERENCES Especie (especie_id)
);
INSERT INTO 
  Animais(animal_id, animal_name, animal_from, animal_sex, animal_age, especie_id)
  VALUES
    (1, 'Macaco', 'BR', 'FEMALE', 4, 1),
    (2, 'Orangotango', 'BR', 'MALE', 2, 1),
    (3, 'Homo-Sapiens', 'ÁFRICA', 'BI', 32, 1);

CREATE TABLE Animal_Cuidador (
  animal_id INT,
  cuidador_id INT,
  CONSTRAINT PRIMARY KEY (animal_id , cuidador_id),
  FOREIGN KEY (animal_id)
    REFERENCES Animais (animal_id),
  FOREIGN KEY (cuidador_id)
    REFERENCES Cuidador (cuidador_id)
);
    
INSERT INTO
  Animal_Cuidador(animal_id, cuidador_id)
  VALUES
    (1, 1),
    (2, 1),
    (3, 1);


-- CHAMANDO PRA CONFIRMAR ======
SELECT * FROM ZOO.Animais;
SELECT * FROM ZOO.Especie;
SELECT * FROM ZOO.Cuidador;
SELECT * FROM ZOO.Gerente;
SELECT * FROM ZOO.Animal_Cuidador;

SELECT 
  A.animal_name AS Animal,
  E.especie_name AS Especie
FROM
  ZOO.Animais AS A
      INNER JOIN
  ZOO.Especie AS E ON A.especie_id = E.especie_id;
