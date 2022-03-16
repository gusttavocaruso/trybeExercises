# Os parâmetros podem ser passados de forma posicional ou nomeada. Os posicionais são aqueles definidos através da posição ao qual é chamado e os nomeados são definidos através do nome.
def soma(x, y):
    return x + y

soma(2, 2)  # os parâmetros aqui são posicionais
soma(x=2, y=2)  # aqui estamos nomeando os parâmetros

# Os parâmetros também podem ser variádicos. Ou seja, podem variar em sua quantidade:
def concat(*strings):
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

# pode ser chamado com 2 parâmetros
print('1', concat("Carlos", "João"))

# pode ser chamado com um número n de parâmetros
print('2', concat("Carlos", "João", "Maria"))

# dict é uma função que já vem embutida no python
print('3', dict(nome="Felipe", sobrenome="Silva", idade=25))

print('4', dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))
