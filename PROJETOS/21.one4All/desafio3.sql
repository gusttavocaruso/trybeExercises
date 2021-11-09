CREATE VIEW historico_reproducao_usuarios AS
  SELECT 
      U.usuario_nome AS usuario, M.musica_nome AS nome
  FROM
      SpotifyClone.Usuario AS U
        INNER JOIN
      SpotifyClone.Historico_Usuario_Musicas AS HM ON U.usuario_id = HM.usuario_id
        INNER JOIN
      SpotifyClone.Musicas AS M ON HM.musica_id = M.musica_id
  ORDER BY U.usuario_nome ASC , M.musica_nome ASC;
