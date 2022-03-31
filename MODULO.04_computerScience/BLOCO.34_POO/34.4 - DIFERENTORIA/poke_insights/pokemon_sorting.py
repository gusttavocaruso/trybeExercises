import math


def max_attack_key(pokemon):
    """
    Gets max_attack as a sorting key.
    """
    try:
        return int(pokemon["Attack"])
    except (KeyError, TypeError, ValueError):
        return -math.inf


def sort_by(lista_de_pokemons):
    """
    Sorts pokemons by a given criteria, in-place.
    """
    lista_de_pokemons.sort(key=max_attack_key)
