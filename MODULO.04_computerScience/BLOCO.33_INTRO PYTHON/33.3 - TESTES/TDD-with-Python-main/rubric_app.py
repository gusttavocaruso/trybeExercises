import copy
import json

from pyparsing import Dict

def load_json(path_to_file: str) -> list[Dict]:
    '''retorna uma lista de objetos a partir do
    arquivo em path_to_file'''
    if not path_to_file.endswith('.json'):
        raise ValueError()
    with open(path_to_file) as file:
        return json.loads(file.read())


def __order_by(field: str, data: list[Dict], reverse=False) -> None:
    '''ordena [data] pelo campo field, crescente se reverse=False
    ou não fornecido'''
    data.sort(key=lambda x: x[field], reverse=reverse)


def order_by_year(data: list[Dict], reverse=False) -> list[Dict]:
    __order_by('artist', data)
    __order_by('release_year', data, reverse=reverse)

    return data


def get_top_3_ratings(data):
    __order_by('ratings', data, reverse=True)
    return data[:3]


def get_lowest_3_ratings(data):
    __order_by('ratings', data)
    return data[:3]