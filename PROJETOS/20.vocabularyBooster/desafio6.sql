SELECT 
    CONCAT(E.first_name, ' ', E.last_name) AS 'Nome completo',
    J.job_title AS Cargo,
    JH.start_date AS 'Data de início do cargo',
    D.department_name AS Departamento
FROM
    hr.job_history AS JH
        INNER JOIN
    hr.employees AS E ON JH.employee_id = E.employee_id
        INNER JOIN
    hr.departments AS D ON JH.department_id = D.department_id
        INNER JOIN
    hr.jobs AS J ON JH.job_id = J.job_id
ORDER BY CONCAT(E.first_name, ' ', E.last_name) DESC , J.job_title ASC;
