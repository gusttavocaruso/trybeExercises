ALFABETO = "abcdefghijklmnopqrstuvwxyz"


def gambihash(string):
    lista_indices = [ALFABETO.index(letra) for letra in string]
    return sum(lista_indices)


memoria_do_hashmap = [None] * 8

memoria_do_hashmap[gambihash('feijao') % 8] = 7.89
memoria_do_hashmap[gambihash('arroz') % 8] = 4.25
# ok
print(memoria_do_hashmap[0])
