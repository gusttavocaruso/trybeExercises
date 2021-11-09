CREATE VIEW estatisticas_musicais AS
  SELECT 
    MAX(M.musica_id) AS cancoes,
    MAX(A.artista_id) AS artistas,
    MAX(Ab.album_id) AS albuns
  FROM
    SpotifyClone.Musicas AS M
      INNER JOIN
    SpotifyClone.Artistas AS A
      INNER JOIN
    SpotifyClone.Album AS Ab;
