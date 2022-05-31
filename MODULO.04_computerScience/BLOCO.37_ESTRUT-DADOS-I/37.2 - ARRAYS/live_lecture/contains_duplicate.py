# def contains_duplicate(array_de_numeros):
#     #[0, 1, 2]
#     for index, atual in enumerate(array_de_numeros): #O(n)
#         #(0, 0)
#         for prox in array_de_numeros[index+1:]: #O(n)
#             #O(n^2)
#             if atual == prox:
#                 return True
#     return False


def contains_duplicate(array_de_numeros):
    array_de_numeros.sort() #O(n2) > **O(n log n)** > O(n)
    for index in range(len(array_de_numeros) - 1): #O(n)
        #O(nlogn)
        if array_de_numeros[index] == array_de_numeros[index+1]:
            #2 in array? o(n)
            return True
    return False


if __name__ == '__main__':
    test1 = [1, 2, 3, 1] # True
    test2 = [] # False
    test3 = [1, 2, 3, 4] # False
    test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] # True
    print(contains_duplicate(test1))
    print(contains_duplicate(test2))
    print(contains_duplicate(test3))
    print(contains_duplicate(test4))
