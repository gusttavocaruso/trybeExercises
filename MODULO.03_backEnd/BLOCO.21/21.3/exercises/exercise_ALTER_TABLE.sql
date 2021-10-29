-- Desafios sobre ALTER TABLE ============

-- ex1 Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address
-- para address , mantendo o mesmo tipo e tamanho de dados.
USE hr;
ALTER TABLE locations CHANGE street_address ADDRESS VARCHAR(45) NOT NULL;


-- ex2 Escreva uma query SQL para alterar o nome da coluna region_name para region , 
-- mantendo o mesmo tipo e tamanho de dados.
USE hr;
ALTER TABLE regions CHANGE region_name REGION VARCHAR(25) UNIQUE;


-- ex3 Escreva uma query SQL para alterar o nome da coluna country_name para country , 
-- mantendo o mesmo tipo e tamanho de dados.
USE hr;
ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40) NOT NULL;
