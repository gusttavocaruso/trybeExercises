# compreensão de listas

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# Quando uma nova lista é criada como resultado de uma iteração, podemos simplificar utilizando compreensão de listas .

min_rating = 3.0
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# A compreensão de listas é declarada da mesma maneira que uma lista comum, porém no lugar dos elementos nós colocamos a iteração que irá gerar os elementos da nova lista. Um detalhe importante é que é possível filtrar esses elementos utilizando o if .
# Poderíamos listar também somente o nome dos restaurantes acrescentando na linha 13 após a declaração 'restaurant' o colchete com name dentro ['name']:
# filtered_restaurants = [restaurant["name"]

# Isto é equivalente às operações de map e filter em JavaScript.
