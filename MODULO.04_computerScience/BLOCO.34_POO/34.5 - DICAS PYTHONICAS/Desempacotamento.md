A linguagem Python possui um mecanismo conhecido como atribuição múltipla, que nos permite atribuir valores a várias variáveis ao mesmo tempo.

Esse desempacotamento acontece da seguinte maneira: quando encontra uma variável à direita da atribuição e múltiplas variáveis a esquerda, o interpretador irá atribuir cada valor da estrutura iterável a uma variável diferente do lado esquerdo.

Podemos utilizar também o caractere * para indicar que naquela variável receberemos todos os outros valores.

Exemplos:
```python
  a, b = "ab"
  print(a)  # saída: 'a'
  print(b)  # saída: 'b'

  a, b = 1, 2
  print(a)  # saída: 1
  print(b)  # saída: 2

  a, b, *rest = range(10)
  # o primeiro valor da estrutura é atribuído a a
  print(a)     # saída: 0
  # o segundo valor da estrutura é atribuído a b
  print(b)     # saída: 1
  # por causa do *, todo o resto é atribuído a rest
  print(rest)  # saída: [2, 3, 4, 5, 6, 7, 8, 9]

  a, *rest, b = range(10)
  print(rest)  # saída: [1, 2, 3, 4, 5, 6, 7, 8]
  # o primeiro valor da estrutura é atribuído a a
  print(a)     # saída: 0
  # o último valor da estrutura é atribuído a b
  print(b)     # saída: 9
```

E além de listas, é possível fazer esse processo em tuplas, dicionários e outros itens. No caso do dicionário, ele normalmente retornará suas chaves. Para retornar os valores do dicionário, ele usa dois asteriscos, como no exemplo abaixo

```python
  mensagem = {'mensagem': 'Bem-vindo', 'nome': 'Yuri'}
  escreve_mensagem(**mensagem)
  Bem-vindo, Yuri
```

E ainda há outra possibilidade de desempacotamento, usando o underline, assim:

```python
  >>> numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  >>> x, y, *_ = numeros
  >>> x
  0
  >>> y
  1
```

A diferença é que nesse caso o underline age para ignorar os demais itens da lista.
