CREATE VIEW top_2_hits_do_momento AS
    SELECT 
        M.musica_nome AS cancao, COUNT(HU.musica_id) AS reproducoes
    FROM
        SpotifyClone.Musicas AS M
            INNER JOIN
        SpotifyClone.Historico_Usuario_Musicas AS HU ON M.musica_id = HU.musica_id
    GROUP BY M.musica_nome
    ORDER BY `reproducoes` DESC , `cancao` ASC
    LIMIT 2;
