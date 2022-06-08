# estrutura de dicionário
# desempacotar os itens das tuplas
# os valores do dicionário serão conjuntos

friends = [("Cris", "Carlos"), ("Cris", "João"), ("Bux", "Carlos")]
# {"Cris":{"Carlos","João"}, "Carlos":{"Cris", "Bux"},
# "João":{"Cris"}, "Bux":{"Carlos"}}


def organize_friends(friends):
    dict_friends = {}

    for a, b in friends:
        if a not in dict_friends:
            dict_friends[a] = set()

        if b not in dict_friends:
            dict_friends[b] = set()

        dict_friends[a].add(b)
        dict_friends[b].add(a)

    return dict_friends


print(organize_friends(friends))
