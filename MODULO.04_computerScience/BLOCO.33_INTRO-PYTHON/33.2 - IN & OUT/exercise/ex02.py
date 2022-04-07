# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

import random


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
    words = ['bola', 'casa', 'gato', 'cachorro']
    play(words)
