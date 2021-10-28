SELECT 
    UCASE(CONCAT(E.first_name, ' ', E.last_name)) AS 'Nome completo',
    JH.start_date AS 'Data de início',
    E.salary AS Salário
FROM
    hr.employees AS E
        INNER JOIN
    hr.job_history AS JH ON E.employee_id = JH.employee_id
WHERE
    MONTH(JH.start_date) IN (1 , 2, 3)
ORDER BY UCASE(CONCAT(E.first_name, ' ', E.last_name)) ASC , JH.start_date ASC;
