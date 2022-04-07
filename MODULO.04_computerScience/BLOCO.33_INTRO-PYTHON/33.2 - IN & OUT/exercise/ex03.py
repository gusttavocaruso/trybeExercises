# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada animal em uma linha.

import random


def import_words(file_path):
    with open(file_path) as file:
        return [word.strip() for word in file]


def play_again(words):
    user_choice = input('''
      Play again?
      y/n: ''')
    if user_choice == 'y':
        play(words)
    elif user_choice == 'n':
        print('All right, bye')


def play(words):
    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))

    print(scrambled_word)
    user_answ = input('''
        Vc está vendo uma palavra embaralhada.
        Qual palavra é essa?
    ''')
    if user_answ == word:
        print('Parabéns, vc acertou')
        play_again(words)
    else:
        print('Wrong answare')
        play_again(words)


if __name__ == '__main__':
    words = import_words('words.txt')
    play(words)
