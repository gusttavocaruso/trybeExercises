from pokemon_read import read_pokemons


def get_unique_pokemon_types(path):
    lista_de_pokemons = read_pokemons(path)
    # A solução comentada retorna um conjunto, não uma lista!
    # return set(pokemon['Type 1'] for pokemon in lista_de_pokemons)
    lista_de_tipos_unicos = []

    for pokemon in lista_de_pokemons:
        if pokemon['Type 1'] not in lista_de_tipos_unicos:
            lista_de_tipos_unicos.append(pokemon["Type 1"])

    return lista_de_tipos_unicos


def filter_by_pokemon_type(lista_de_pokemons, pokemon_type):
    return [
        pokemon
        for pokemon in lista_de_pokemons
        if pokemon['Type 1'] == pokemon_type
    ]


def get_max_attack(path):
    return max(get_attack(path))


def get_min_attack(path):
    return min(get_attack(path))


def get_attack(path):
    lista_de_pokemons = read_pokemons(path)

    return [
        int(pokemon['Attack'])
        for pokemon in lista_de_pokemons
    ]


def matches_attack(pokemon, attack):
    return int(pokemon["Attack"]) <= attack


def filter_by_attack(lista_de_pokemons, attack):
    return [
        pokemon
        for pokemon in lista_de_pokemons
        if matches_attack(pokemon, attack)
    ]
