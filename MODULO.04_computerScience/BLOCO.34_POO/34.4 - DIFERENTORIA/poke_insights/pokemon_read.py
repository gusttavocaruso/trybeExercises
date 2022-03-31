import csv


def read_pokemons(path):
    with open(path) as file_object:
        pokemons = csv.DictReader(file_object)
        return [pokemon for pokemon in pokemons]


if __name__ == '__main__':
    print(read_pokemons('Pokemon_mock.csv'))
