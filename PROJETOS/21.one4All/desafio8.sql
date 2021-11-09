DELIMITER $$

CREATE TRIGGER SpotifyClone.trigger_usuario_delete
  BEFORE DELETE ON SpotifyClone.Usuario
    FOR EACH ROW
  BEGIN
    DELETE FROM SpotifyClone.Usuarios_follows_Artista
      WHERE usuario_id = OLD.usuario_id; 
    DELETE FROM SpotifyClone.Historico_Usuario_Musica
    WHERE usuario_id = OLD.usuario_id;
  END $$

DELIMITER ;
