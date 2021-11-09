CREATE VIEW perfil_artistas AS 
  SELECT 
    A.artista_nome AS artista,
    Ab.album_nome AS album,
    (SELECT COUNT(*)
      FROM SpotifyClone.Usuario_follows_Artista AS UF
      WHERE UF.artista_id = A.artista_id
      GROUP BY UF.artista_id) AS seguidores
  FROM
    SpotifyClone.Artistas AS A
      INNER JOIN
    SpotifyClone.Album AS Ab ON A.artista_id = Ab.artista_id
  ORDER BY `seguidores` DESC , `artista` ASC , `album` ASC;
