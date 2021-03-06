# caso:

# trocar exemplo código 1


def more_than_twenty_five_percent(array): # nome da função e array que vamos validar

    # se quiser economizar memória "len_array = len(array)"

    twenty_five_percent = len(array) // 4 # dividir o array em partes, tem que ser numero inteiro devido a posição do array
                            # len é o tamanho da coleção 
    seventy_five_percent = len(array) - twenty_five_percent # precisamos saber onde estão os outros 75%, se o elemento estiver 
                                                            # dentro dos outros 75% significa que repetiu mais que 25%
    for index, element in enumerate(array[:seventy_five_percent]): # se o elemento aparece nos outros 75% ele repetiu bem amis que 25%

        if element == array[index + twenty_five_percent]: # verifica qual elemento mais se repetiu e solta o mesmo como resultado
            return element # elemento que mais se repetiu
    return -1 #  senão reptiu solta -1 e fim de papo

if __name__ == "__main__":
    test1 = [1, 2, 2, 6, 6, 6, 6, 7, 10]         # saída: 6
    test2 = [1, 1, 2, 3]                         # saída: 1
    test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]      # saída: -1
    print(f"O elemento encontrado para o teste1: {test1}")
    print(f"foi {more_than_twenty_five_percent(test1)}")
    print(f"O elemento encontrado para o teste2: {test2}")
    print(f"foi {more_than_twenty_five_percent(test2)}")
    print(f"O elemento encontrado para o teste3: {test3}")
    print(f"foi {more_than_twenty_five_percent(test3)}")

##############################################################################################################################
# Caso 2:



def replace_elements(arr):  #  
    for i in range(len(arr)):  # i esta iterando e passando em todos os numeros
        for j in range(i, len(arr)):  # J esta comparando todos os numeros que estão lado a lado da esquerda para direita e itera
            if(arr[j] > arr[i]):  # compara que é maior que o outro a sai 
                arr[i] = arr[j]  # recebe o valor da direita

    return arr

if __name__ == "__main__":
    test1 = [1, 2, 3, 1]                          # saída: [3,3,3,1]
    test2 = [9, 8, 7, 6, 5, 4, 3, 2, 1]           # saída: [9, 8, 7, 6, 5, 4, 3, 2, 1]
    test3 = [9, 8, 7, 6, 4, 5, 3, 2, 1,9]        # saída: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    print(replace_elements(test1))
    print(replace_elements(test2))
    print(replace_elements(test3))


 ##############################################################################################################################
# Caso 3

def proxima_letra_maior(letra, alvo): # função que vai verificar letras e os alvos que miramos

    inicio_array = 0   #  aqui temos o inicio do array 
    array_completo = len(letra)   # aqui temos o meio do array
    meio_array = 0 # fim do array

    while inicio_array < array_completo:   # com while verificar qual a letra que é maior

        meio_array = (array_completo + inicio_array) // 2 # aqui descobrimos onde é o meio do array

        if letra[meio_array] <= alvo:   # comparar se a letra é menor que o alvo, assim inicia o alfabeto denovo
            inicio_array = meio_array + 1   # verificar do inicio para o meio da lista
        else:
            array_completo = meio_array   #  ou vai do meio para o fim da lista

    return letra[inicio_array % len(letra)] # recurso tecnico % exemplo 3 % 5 = 3, retorna a propria letra se ela for a menor


if __name__ == "__main__":
    letras1 = ["c", "f", "j"]
    alvo1 = "a"
    # saída: "c"
    print(f"A saída foi: {proxima_letra_maior(letras1, alvo1)}")

    letras2 = ["c", "f", "j"]
    alvo2 = "c"
    # saída: "f"
    print(f"A saída foi: {proxima_letra_maior(letras2, alvo2)}")

    letras3 = ["c", "f", "j"]
    alvo3 = "d"
    # saída: "f"
    print(f"A saída foi: {proxima_letra_maior(letras3, alvo3)}")

    letras4 = ["c", "f", "j"]
    alvo4 = "g"
    # saída: "j"
    print(f"A saída foi: {proxima_letra_maior(letras4, alvo4)}")

    letras5 = ["c", "f", "j"]
    alvo5 = "j"
    # saída: "c"
    print(f"A saída foi: {proxima_letra_maior(letras5, alvo5)}")

    letras6 = ["c", "f", "j"]
    alvo6 = "k"
    # saída: "c"
    print(f"A saída foi: {proxima_letra_maior(letras6, alvo6)}")
