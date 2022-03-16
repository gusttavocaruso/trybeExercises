# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final,
# modificando seu valor de acordo com o passo ( step ) definido.
# Pode ser declarado como range( [start], stop[, step] ) , em que start e step podem ser omitidos,
# possuindo valores iniciais iguais a 0 e 1 respectivamente.

# Um ponto de atenção é que o stop não é incluído na sequência,
# portanto caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
# Seus valores são criados a medida que esta sequência é percorrida.

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
