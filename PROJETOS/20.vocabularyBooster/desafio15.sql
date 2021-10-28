USE hr;
DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN jobName VARCHAR(50))
BEGIN
  SELECT ROUND(AVG(E.Salary), 2) AS 'Média salarial'
    FROM hr.employees AS E
    INNER JOIN hr.jobs AS J ON E.job_id = J.job_id
    WHERE J.job_title = jobName;
END $$

DELIMITER ;
