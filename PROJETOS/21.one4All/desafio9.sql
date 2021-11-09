USE SpotifyClone;

DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN artist_name VARCHAR(100))
	BEGIN
		SELECT 
			A.artista_nome AS artista,
			Ab.album_nome AS album
		FROM
			SpotifyClone.Artistas AS A
				INNER JOIN
			SpotifyClone.Album AS Ab ON A.artista_id = Ab.artista_id
			WHERE A.artista_nome = artist_name
			ORDER BY Ab.album_nome ASC;
	END $$

DELIMITER ;
