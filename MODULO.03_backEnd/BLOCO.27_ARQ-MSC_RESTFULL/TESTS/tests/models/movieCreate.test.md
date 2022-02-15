Requisitos em testes (Model)

Vamos relembrar nosso primeiro requisito:
  1. A API deverá permitir a inserção de filmes no banco de dados :
      - Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
      - Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID ;

Como estamos falando a princípio de um banco de dados com essas informações. Podemos descrever o requisito pensando primeiramente o Model com as seguintes asserções/ afirmações:
  1. Insere um novo filme no DB
      - quando é inserido com sucesso
        - retorna um objeto
        - tal objeto possui um "id" do novo filme inserido!
#

Implementação

O segundo passo é de fato implementarmos nossa camada de model de acordo com os testes escritos.