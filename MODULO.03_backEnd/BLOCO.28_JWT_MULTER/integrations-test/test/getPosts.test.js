const chai = require('chai');
const sinon = require('sinon');


const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;
const { getConnection } = require('./connectionMock');
const { MongoClient } = require('mongodb');
const server = require('../index');

describe('GET /api/posts', () => {
	/**
	 * Iremos testar o cenário quando os posts são buscados com sucesso.
	 * Lembrando que nesse projeto, por fins didáticos, esse endpoint
	 * possui um `mock`, ou seja, os posts não estão no banco de dados.
	 * Sendo assim, não precisaremos nos preocupar com isolar o BD aqui.
	 */

   let connectionMock;

   before(async () => {
		connectionMock = await getConnection();
		sinon.stub(MongoClient, 'connect').resolves(connectionMock);
	});

  after(async () => {
    MongoClient.connect.restore();
  });

   describe('Quando não é passado um JWT para autenticação', () => {
    let response;
    
		before(async () => {
      response = await chai.request(server)
        .get('/api/posts')
        .set('authorization', '');
    });

		it('retorna código de status "401"', () => {
			expect(response).to.have.status(401);
		});

		it('retorna um objeto no body', () => {
			expect(response.body).to.be.an('object');
		});

		it('objeto de resposta possui a propriedade "error"', () => {
			expect(response.body).to.have.property('error');
		});

		it('a propriedade "error" possui a mensagem "Token não encontrado ou informado"', () => {
			expect(response.body.error).to.be.equal('Token não encontrado ou informado');
		});
	});

	describe('Quando os posts são buscados com sucesso', () => {
		let response;

		before(async () => {
			/**
			* Para autenticar precisamos ter a pessoa usuária em questão
			* no banco de dados e por isso, vamos criá-lo antes
			*/
			const usersCollection = connectionMock.db('jwt_exercise').collection('users');
			await usersCollection.insertOne({
				username: 'user-logado',
				password: 'senha-logado'
			});

			/**
			* Perceba que iremos replicar todo o processo feito no
			* caso de sucesso no teste de login
			*/
			const token = await chai.request(server)
			.post('/api/login')
			.send({
				username: 'user-logado',
				password: 'senha-logado'
			})
			.then((res) => res.body.message);

			response = await chai.request(server)
				.get('/api/posts')
				.set('authorization', token);
    });

			/** 
		 	* Esse é o contrato definido para esse endpoint.
			*/
			it('retorna código de status "200"', () => {
				expect(response).to.have.status(200);
			});

			it('retorna um objeto no body', () => {
				expect(response.body).to.be.an('object');
			});

			it('objeto de resposta possui a propriedade "mockPosts"', () => {
				expect(response.body).to.have.property('mockPosts');
			});

			it('a propriedade "mockPosts" é um array', () => {
				expect(response.body.mockPosts).to.be.an('array');
			});
	});
});
