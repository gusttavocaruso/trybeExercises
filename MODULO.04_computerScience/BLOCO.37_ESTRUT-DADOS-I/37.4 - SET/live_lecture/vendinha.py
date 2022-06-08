# criar o intervalo de produtos usando o range() = TODOS OS PRODUTOS
# transformar nosso shelf_products em conjunto = TODOS PRODUTOS Q EU TENHO
# usar a operação de diferença

shelf_products = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
# 2, 5, 8, 10, 11, 12, 15, 16, 17, 18, 19


def to_buy(shelf_products):
    all_products = set(range(1, 21))
    shelf_set = set(shelf_products)
    return all_products.difference(shelf_set)


print(to_buy(shelf_products))
