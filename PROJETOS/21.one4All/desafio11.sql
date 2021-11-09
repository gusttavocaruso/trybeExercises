CREATE VIEW cancoes_premium AS
  SELECT 
    M.musica_nome AS `nome`, COUNT(*) AS reproducoes
  FROM
    SpotifyClone.Usuario AS U
      INNER JOIN
    SpotifyClone.Historico_Usuario_Musicas AS UH ON UH.usuario_id = U.usuario_id
    INNER JOIN
    SpotifyClone.Musicas AS M ON M.musica_id = UH.musica_id
  WHERE
    EXISTS( 
      SELECT * FROM SpotifyClone.AssinaturaPlanos AS P
      WHERE P.plano_nome IN('familiar', 'universitário')
    AND U.plano_id = P.plano_id)
  GROUP BY UH.musica_id
  ORDER BY nome ASC;
