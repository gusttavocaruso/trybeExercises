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


if __name__ == '__main__':
    books = import_books('books.json')
    print(books)
