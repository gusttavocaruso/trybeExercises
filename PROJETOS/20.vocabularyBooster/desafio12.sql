SELECT 
    CONCAT(E1.first_name, ' ', E1.last_name) AS 'Nome completo funcionário 1',
    E1.salary AS 'Salário funcionário 1',
    E1.phone_number AS 'Telefone funcionário 1',
    CONCAT(E2.first_name, ' ', E2.last_name) AS 'Nome completo funcionário 2',
    E2.salary AS 'Salário funcionário 2',
    E2.phone_number AS 'Telefone funcionário 2'
FROM
    hr.employees AS E1,
    hr.employees AS E2
WHERE
    E1.job_id = E2.job_id
        AND E1.employee_id != E2.employee_id
ORDER BY CONCAT(E1.first_name, ' ', E1.last_name) , CONCAT(E2.first_name, ' ', E2.last_name);
