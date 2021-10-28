SELECT 
    J.job_title AS Cargo,
    ROUND(AVG(E.salary), 2) AS 'Média salarial',
    CASE
        WHEN ROUND(AVG(E.salary), 2) <= 5800 THEN 'Júnior'
        WHEN ROUND(AVG(E.salary), 2) BETWEEN 5801 AND 7500 THEN 'Pleno'
        WHEN ROUND(AVG(E.salary), 2) BETWEEN 7501 AND 10500 THEN 'Sênior'
        WHEN ROUND(AVG(E.salary), 2) > 10500 THEN 'CEO'
        ELSE 'nothing at all'
    END AS Senioridade
FROM
    hr.jobs AS J
        INNER JOIN
    hr.employees AS E ON J.job_id = E.job_id
GROUP BY E.job_id
ORDER BY ROUND(AVG(E.salary), 2) ASC , J.job_title ASC;
