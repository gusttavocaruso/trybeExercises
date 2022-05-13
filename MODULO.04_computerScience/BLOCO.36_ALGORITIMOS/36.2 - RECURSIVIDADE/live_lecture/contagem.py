def contagem_regressiva(n):
    if n == 0:
        print("Acabou")
    else:
        print(n)
        contagem_regressiva(n-1)

contagem_regressiva(10)
