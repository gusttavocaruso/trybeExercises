-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;


-- Quando não utilizar índices =======

-- Mesmo notando que os resultados foram favoráveis para o uso de índices nesses exemplos, é importante ressaltar que eles nem sempre devem ser utilizados. Abaixo, segue uma lista das situações em que o uso de índices deve ser evitado:

-- Em tabelas pequenas, pois a diferença de performance será mínima, se houver;

-- Em colunas que retornarão uma grande quantidade dados quando filtradas. Por exemplo, você não adicionaria os artigos "o" e "a" ao índice de um livro;

-- Em tabelas que frequentemente têm atualizações em grande escala, uma vez que a performance dessas atualizações será afetada;

-- Em colunas que são frequentemente manipuladas, haja vista que a manutenção do índice dessa coluna pode demandar muito tempo quando feita em excesso;

-- Em colunas que possuem muitos valores nulos.
