# A Sequência de Fibonacci, muito presente em diversas formas na natureza, é uma sequência numérica começando por 0 e 1 e cada termo subsequente corresponde à soma dos dois anteriores.
# Podemos escrever esta sequência da seguinte maneira:

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# O laço de repetição while , acontecerá enquanto a condição for satisfeita, e temos de ter o cuidado de manipular a variável presente na condicional ou entraremos em uma repetição infinita.

# No exemplo, estamos imprimindo os elementos da sequência até que atinja o valor 10.

# Foi utilizado um truque neste exemplo que se chama atribuição múltipla. Isto é atribuição de vários valores a múltiplas variáveis ao mesmo tempo. Este truque pode ser utilizado também para fazer a troca de valores entre variáveis: a, b = b, a .


# Variáveis definidas dentro das funções tem escopo local, porém uma função quando não encontra um nome no escopo local irá procurar no espaço de nomes global.
# Em alguns casos, podemos querer limitar um parâmetro em nomeado ou posicional para evitar ambiguidades e/ou aumentar legibilidade.

len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

# len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Botaro", "Cássio", ", ")  # imprime Botaro Cássio ,

print("Botaro", "Cássio", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Botaro, Cássio
