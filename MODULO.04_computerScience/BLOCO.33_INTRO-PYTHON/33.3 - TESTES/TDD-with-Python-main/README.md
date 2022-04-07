# TDD-with-Python

## Funções a serem implementadas

### 1 - Abrir um arquivo json

- Deve receber como parâmetro uma string com o caminho do arquivo a ser aberto;

- Caso o arquivo não seja json, levantar uma exceção;

- Caso o arquivo não exista, levantar uma exceção;

- Se o arquivo existir, carregá-lo em uma lista e retorná-la como uma lista de dicionários onde cada dicionário é um objeto json do arquivo.

### 2 - Ordernar as músicas por ano de lançamento

- Deve receber como parâmetros uma lista de dicionários e uma variável do tipo bool que indica se a ordem será crescente ou decrescente;

- Caso duas músicas possuam o mesmo ano de lançamento, ordená-las também pelo nome do autor em ordem alfabética, independente da variável que indica ordem crescente/decrescente.

- Caso não hajam músicas no objeto passado por parâmetro, retornar uma lista vazia.

### 3 - Obter as 3 músicas mais bem avaliadas

- Deve receber como parâmetros uma lista de dicionários;

- Retorna uma lista com as 3 músicas mais bem avaliadas;

- Caso não hajam músicas no objeto passado por parâmetro, retornar uma lista vazia.

### 4 - Obter as 3 músicas com menor avaliação

- Deve receber como parâmetros uma lista de dicionários;

- Retorna uma lista com as 3 músicas mais bem avaliadas;

- Caso não hajam músicas no objeto passado por parâmetro, retornar uma lista vazia.
