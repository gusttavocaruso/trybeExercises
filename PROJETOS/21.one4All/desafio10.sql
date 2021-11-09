USE SpotifyClone;

DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(usuario_id INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE music_total INT;
  SELECT 
      COUNT(*)
  FROM
      SpotifyClone.Historico_Usuario_Musicas AS UH
  WHERE UH.usuario_id = usuario_id
  INTO music_total;
  RETURN music_total;
END $$

DELIMITER ;
