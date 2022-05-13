""" Dado uma matriz de dimensão m * n, onde m é a linha e n é a coluna, e de ordenação decrescente, 
retorne a contagem dos números negativos presentes na matriz. """


def count_negatives(matriz):
    contador = 0

    for fileira in matriz:
        for valor_coluna in fileira:
            if valor_coluna < 0:
                contador += 1

    return contador

teste1 = [[1, -1], [-1, -1]]
print(f"Entrada: {teste1}, Saída: {count_negatives(teste1)}")



