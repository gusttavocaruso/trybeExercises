# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e calcule a porcentagem de livros em cada categoria, em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# Saída:
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json


def import_books(file_path):
    with open(file_path) as file:
        return [json.loads(line) for line in file]


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    # print(categories)
    return categories


if __name__ == '__main__':
    books = import_books('books.json')
    count_books_by_categories(books)
    # print(len(books))
