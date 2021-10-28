SELECT 
    C.country_name AS País,
    IF(R.region_name = 'Europe',
        'incluído',
        'não incluído') AS 'Status Inclusão'
FROM
    hr.countries AS C
        INNER JOIN
    hr.regions AS R ON C.region_id = R.region_id
ORDER BY C.country_name ASC;
