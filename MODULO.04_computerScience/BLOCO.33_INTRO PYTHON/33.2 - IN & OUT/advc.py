x = 5
y = 3


print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 2 = 1.67

# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores, como nesse exemplo, duas casas decimais (.2f).


print(f"{x:.^3}")  # saída: ".5."

# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos
