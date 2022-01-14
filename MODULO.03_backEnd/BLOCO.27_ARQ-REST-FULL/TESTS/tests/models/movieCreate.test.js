const sinon = require('sinon');
const { expect } = require('chai');

const { MongoClient } = require('mongodb');
const { getConnection } = require('./mockConnection');

const connection = require('../../MSC/models/connection');
const MoviesModel = require('../../MSC/models/movieModel');


describe('Insere um novo filme no BD', () => {
  let connectionMock;

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

    it('deve existir um filme com o título cadastrado', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock
        .db('class')
        .collection('movies')
        .findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
    });
  });
});

/*
  Como ainda não temos a implementação, vamos fixar
  MovieModels() como um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento:
    const MoviesModel = {
      create: () => {}
    };
*/
