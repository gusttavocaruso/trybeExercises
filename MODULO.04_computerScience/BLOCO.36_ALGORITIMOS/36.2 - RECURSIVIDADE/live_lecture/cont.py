#Crie um algoritmo recursivo que faça
#uma contagem regressiva

def contagem(n):
    if n == 0:
        print("Finalmente")
    else:
        print(n)
        return contagem(n-1)

contagem(10)
