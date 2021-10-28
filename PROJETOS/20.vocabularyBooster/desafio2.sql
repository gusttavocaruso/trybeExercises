SELECT 
    J.job_title AS Cargo,
    CASE
        WHEN J.max_salary <= 10000 THEN 'Baixo'
        WHEN J.max_salary BETWEEN 10001 AND 20000 THEN 'Médio'
        WHEN J.max_salary BETWEEN 20001 AND 30000 THEN 'Alto'
        WHEN J.max_salary > 30001 THEN 'Altíssimo'
        ELSE 'Valor não parametrizado'
    END AS 'Nível'
FROM
    hr.employees AS E
        INNER JOIN
    hr.jobs AS J ON E.job_id = J.job_id
GROUP BY E.job_id
ORDER BY J.job_title ASC;
