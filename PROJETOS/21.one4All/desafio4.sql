CREATE VIEW top_3_artistas AS
    SELECT 
        A.artista_nome AS artista,
        COUNT(UF.artista_id) AS seguidores
    FROM
        SpotifyClone.Artistas AS A
            INNER JOIN
        SpotifyClone.Usuario_follows_Artista AS UF ON A.artista_id = UF.artista_id
            INNER JOIN
        SpotifyClone.Usuario AS U ON UF.usuario_id = U.usuario_id
    GROUP BY A.artista_nome
    ORDER BY `seguidores` DESC , `artista` ASC
    LIMIT 3;
