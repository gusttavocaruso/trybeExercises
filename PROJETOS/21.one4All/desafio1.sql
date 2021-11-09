DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE AssinaturaPlanos (
    plano_id INT AUTO_INCREMENT,
    plano_nome VARCHAR(45),
    valor_plano DECIMAL(4, 2),
    CONSTRAINT PRIMARY KEY (plano_id)
);
INSERT INTO 
  AssinaturaPlanos(plano_id, plano_nome, valor_plano)
VALUES
  (1, 'gratuito', 0),
  (2, 'familiar', 7.99),
  (3, 'universitário', 5.99);

CREATE TABLE Artistas (
    artista_id INT AUTO_INCREMENT,
    artista_nome VARCHAR(100),
    CONSTRAINT PRIMARY KEY (artista_id)
);
INSERT INTO
  Artistas(artista_id, artista_nome)
VALUES
  (1, 'Walter Phoenix'),
  (2, 'Peter Strong'),
  (3, 'Lance Day'),
  (4, 'Freedie Shannon');

CREATE TABLE Album (
    album_id INT AUTO_INCREMENT,
    album_nome VARCHAR(100),
    artista_id INT,
    CONSTRAINT PRIMARY KEY (album_id),
    FOREIGN KEY (artista_id)
        REFERENCES Artistas (artista_id)
);
INSERT INTO
  Album(album_id, album_nome, artista_id)
VALUES
  (1, 'Envious', 1),
  (2, 'Exuberant', 1),
  (3, 'Hallowed Steam', 2),
  (4, 'Incandescent', 3),
  (5, 'Temporary Culture', 4);

CREATE TABLE Musicas (
    musica_id INT AUTO_INCREMENT,
    musica_nome VARCHAR(100),
    album_id INT,
    CONSTRAINT PRIMARY KEY (musica_id),
    FOREIGN KEY (album_id)
        REFERENCES Album (album_id)
);
INSERT INTO
  Musicas(musica_id, musica_nome, album_id)
VALUES
  (1, 'Soul For Us', 1),
  (2, 'Reflections Of Magic', 1),
  (3, 'Dance With Her Own', 1),
  (4, 'Troubles Of My Inner Fire', 2),
  (5, 'Time Fireworks', 2),
  (6, 'Magic Circus', 3),
  (7, 'Honey, So Do I', 3),
  (8, 'Sweetie Lets go Wild', 3),
  (9, 'She Knows', 3),
  (10, 'Fantasy For Me', 4),
  (11, 'Celebration Of More', 4),
  (12, 'Rock His Everything', 4),
  (13, 'Home Forever', 4),
  (14, 'Diamond Power', 4),
  (15, "Honey, Let's Be Silly", 4),
  (16, 'Thang Of Thunder', 5),
  (17, 'Words Of Her Life', 5),
  (18, 'Without My Streets', 5);

CREATE TABLE Usuario (
    usuario_id INT AUTO_INCREMENT,
    usuario_nome VARCHAR(100),
    usuario_idade INT,
    plano_id INT,
    CONSTRAINT PRIMARY KEY (usuario_id),
    FOREIGN KEY (plano_id)
        REFERENCES AssinaturaPlanos (plano_id)
);
INSERT INTO
  Usuario(usuario_id, usuario_nome, usuario_idade, plano_id)
VALUES
  (1, 'Thati', 23, 1),
  (2, 'Cintia', 35, 2),
  (3, 'Bill', 20, 3),
  (4, 'Roger', 45, 1);

CREATE TABLE Usuario_follows_Artista (
    usuario_id INT,
    artista_id INT,
    CONSTRAINT PRIMARY KEY (usuario_id , artista_id),
    FOREIGN KEY (usuario_id)
        REFERENCES Usuario (usuario_id),
    FOREIGN KEY (artista_id)
        REFERENCES Artistas (artista_id)
);
INSERT INTO
  Usuario_follows_Artista(usuario_id, artista_id)
VALUES
  (1, 1),
  (1, 3),
  (1, 4),
  (2, 1),
  (2, 3),
  (3, 1),
  (3, 2),
  (4, 4);

CREATE TABLE Historico_Usuario_Musicas (
    usuario_id INT,
    musica_id INT,
    CONSTRAINT PRIMARY KEY (usuario_id , musica_id),
    FOREIGN KEY (usuario_id)
        REFERENCES Usuario (usuario_id),
    FOREIGN KEY (musica_id)
        REFERENCES Musicas (musica_id)
);
INSERT INTO
  Historico_Usuario_Musicas(usuario_id, musica_id)
VALUES
  (1, 1),
  (1, 6),
  (1, 14),
  (1, 16),
  (2, 13),
  (2, 17),
  (2, 2),
  (2, 15),
  (3, 4),
  (3, 16),
  (3, 6),
  (4, 3),
  (4, 18),
  (4, 11);
