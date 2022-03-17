# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def bigger(number, other):
    if other > number:
        return other
    return number


print(bigger(1, 2))
