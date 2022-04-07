# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida

def escada_invertida(name):
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end="")
        print()

if __name__ == "__main__":
    name = input("Digite um nome: ")
    escada_invertida(name)
