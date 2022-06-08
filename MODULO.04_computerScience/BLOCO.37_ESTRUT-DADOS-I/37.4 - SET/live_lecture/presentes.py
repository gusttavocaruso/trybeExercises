# desempacotar a tupla
# adicionar os itens das tuplas num conjunto
# quantidade de itens usando len()

friends = [
    ("Cris", "Carlos"), ("Cris", "João"),
    ("Bux", "Tulio"), ("Carol", "Tulio")
    ]
# 6


def num_people(friends):
    unique_friends = set()

    for a, b in friends:
        unique_friends.add(a)
        unique_friends.add(b)

    return len(unique_friends)


print(num_people(friends))
