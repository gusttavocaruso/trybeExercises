função de test

`python3 -m pytest -k nome_da_func_de_tests`


### AssertionError:
Levantado quando uma instrução assert falha.

###  AttributeError:
Levantado quando uma referência de atributo ou atribuição falha.

### TypeError:
Gerado sempre que uma operação é executada em um tipo de objeto incorreto/sem suporte.

### EOFError:
Levantado quando a função input() atinge uma condição de fim de arquivo (EOF) sem ler nenhum dado.

### ImportError:
Levantada quando a instrução import tem problemas ao tentar carregar um módulo. Também é gerado quando o “from list” em from ... import tem um nome que não pode ser encontrado.

### ModuleNotFoundError:
Uma subclasse de ImportError que é levantada por import quando um módulo não pôde ser localizado. Também é levantada quando None é encontrado em sys.modules.

### IndexError:
Levantada quando um índice de alguma sequência está fora do intervalo. (Se um índice não for um inteiro, TypeError é levantado.)

### KeyError:
Levantada quando uma chave de mapeamento (dicionário) não é encontrada no conjunto de chaves existentes.

### NotImplementedError:
Essa exceção é derivada da RuntimeError. Em classes base, definidas pelo usuário, os métodos abstratos devem gerar essa exceção quando requerem que classes derivadas substituam o método, ou enquanto a classe está sendo desenvolvida, para indicar que a implementação real ainda precisa ser adicionada.