USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(employemail VARCHAR(50))
RETURNS INT READS SQL DATA 
BEGIN
  DECLARE historyJobs INT;
SELECT 
    COUNT(JH.employee_id)
FROM
    hr.job_history AS JH
WHERE
    JH.employee_id = (SELECT 
            E.employee_id
        FROM
            hr.employees AS E
        WHERE
            E.email = employemail) INTO historyJobs;
  RETURN historyJobs;
END $$

DELIMITER ;
