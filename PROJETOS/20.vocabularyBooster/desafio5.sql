SELECT 
    J.job_title AS Cargo,
    (J.max_salary - J.min_salary) AS 'Variação Salarial',
    ROUND((J.min_salary / 12), 2) AS 'Média mínima mensal',
    ROUND((J.max_salary / 12), 2) AS 'Média máxima mensal'
FROM
    hr.jobs AS J
        INNER JOIN
    hr.employees AS E ON J.job_id = E.job_id
GROUP BY E.job_id
ORDER BY (J.max_salary - J.min_salary) ASC , J.job_title ASC;
