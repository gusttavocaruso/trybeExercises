# Contagem regressiva:

def contagem_regressiva(n):   # essa função que compara
    if n == 0:                # compara exemplo 1 é igual a 0?
        print("ACABOU")       # se for igual a 0 acaba essa coisa por favor
    else:					  # senão segue o jogo
        print(n)
        contagem_regressiva(n-1)   # volta na função pois ela própria faz a comparação se é ou não igual a 0


contagem_regressiva(60)       # abrir a contagem com um valor qualquer

################################################################################################
# inversão

niners = [8, 9, 70, 89, 100]
# [100, 89, 70, 9, 8]
#  -1  -2  -3  -4 -5


def reverse(niners):      # funação que inverte os numeros
    if len(niners) == 0:  # iniciar uma comparação para saber de nossa lista é 0 ou não, assim retorna ela mesmo no caso de 0 
        return niners	  # retorna ela mesmo pois se for 0
    return (			  # em caso de alteração de inversão para um array
        [niners[-1]]
        + reverse(niners[:len(niners) - 1])
    )


print(reverse(niners))


################################################################################################
# Binário

def convert(n):					# bora de função que recebe numero
    result, resto = divmod(n, 2)   # uma função do proprio python o dimod ja faz o serviço pra gente retonra uma tupla /  
    if n > 1:                   # verifica se é maior que 1 por favor pra não sair zerando tudo
        convert(result)          #  executa a função novamente com o resultado, isso ocorre até que não de mais pra calcular
    print(resto, end='')          #  joga o resultado na tela


convert(10)                     # numero para uso


print("\")




















	