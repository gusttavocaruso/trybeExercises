PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return PI * radius * radius


if __name__ == '__main__':
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))


# Esse código segue algumas boas práticas para legibilidade, por exemplo, entre cada função temos um espaço de 2 linhas. As funções são declaradas com nomes em letras minúsculas e a constante PI é definida em letras maiúsculas.
