# "Faça uma função que recebe uma lista, e retorna-a na ordem reversa."

# solução 01
def reverse_one(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
        # https://www.w3schools.com/python/ref_list_insert.asp
    return reversed_list


# solução 02
def reverse_two(list):
    if len(list) < 2:
        return list
    else:
        print(list[1:] + [list[0]])
        return reverse_two(list[1:]) + [list[0]]


arr = [1,2,3,4,5,6]
print(reverse_two(arr))
