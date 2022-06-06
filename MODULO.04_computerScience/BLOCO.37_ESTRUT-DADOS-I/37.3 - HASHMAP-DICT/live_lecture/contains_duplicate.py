def contains_duplicate(array_de_numeros):
    meu_dict = dict()

    for num in array_de_numeros:  # O(n)
        if meu_dict.get(num):  # 1 tá no dict?
            return True
        else:  # se não tá, adiciona
            meu_dict[num] = True

    return False


if __name__ == '__main__':
    test1 = [1, 2, 3, 1]  # True
    test2 = []  # False
    test3 = [1, 2, 3, 4]  # False
    test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  # True
    print(contains_duplicate(test1))
    print(contains_duplicate(test2))
    print(contains_duplicate(test3))
    print(contains_duplicate(test4))
