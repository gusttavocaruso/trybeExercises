CREATE VIEW faturamento_atual AS
    SELECT 
        MIN(AP.valor_plano) AS faturamento_minimo,
        MAX(AP.valor_plano) AS faturamento_maximo,
        ROUND(AVG(AP.valor_plano), 2) AS faturamento_medio,
        SUM(AP.valor_plano) AS faturamento_total
    FROM
        SpotifyClone.AssinaturaPlanos AS AP
            INNER JOIN
        SpotifyClone.Usuario AS U ON AP.plano_id = U.plano_id;
