import unittest
from pokemon_read import read_pokemons
from pokemon_sorting import sort_by
from pokemon_insights import get_unique_pokemon_types,\
    get_max_attack, get_min_attack, matches_attack, \
    filter_by_attack


expected = [
    {'Name': 'Pikachu', 'Type 1': 'Electric', 'Attack': '40'},
    {'Name': 'Squirtle', 'Type 1': 'Water', 'Attack': '20'},
    {'Name': 'Bulbasaur', 'Type 1': 'Grass', 'Attack': '30'},
    {'Name': 'Charmander', 'Type 1': 'Fire', 'Attack': '25'},
]

lista_de_pokemons = read_pokemons("Pokemon_mock.csv")


class PokemonsTestCase(unittest.TestCase):
    """Tests for Pokemon read and insights"""
    def test_read_pokemon(self):
        self.assertEqual(lista_de_pokemons, expected)

    def test_get_unique_pokemon_types(self):
        lista_de_tipos_unicos = get_unique_pokemon_types("Pokemon_mock.csv")
        self.assertEqual(lista_de_tipos_unicos, [
            'Electric',
            'Water',
            'Grass',
            'Fire'
        ])

    def test_get_max_attack(self):
        maior_ataque = get_max_attack("Pokemon_mock.csv")
        self.assertEqual(maior_ataque, 40)

    def test_get_min_attack(self):
        menor_ataque = get_min_attack("Pokemon_mock.csv")
        self.assertEqual(menor_ataque, 20)

    def test_matches_attack(self):
        matches = matches_attack(expected[0], 50)
        self.assertEqual(matches, True)

    def test_filter_by_attack(self):
        filtered_by_attack = filter_by_attack(lista_de_pokemons, 50)
        self.assertEqual(filtered_by_attack, expected)

    def test_sort_by(self):
        sort_by(lista_de_pokemons)
        self.assertEqual(lista_de_pokemons, [
            expected[1], expected[3], expected[2], expected[0]
        ])


if __name__ == "__main__":
    unittest.main()
