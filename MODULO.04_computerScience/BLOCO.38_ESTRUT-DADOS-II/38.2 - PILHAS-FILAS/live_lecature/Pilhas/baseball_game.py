from stack import Stack


def calculate_points(rounds):
    if len(rounds) == 1 and rounds[0] in ['D', 'C', '+']:
        return None
    stack = Stack()
    for game_round in rounds:
        if game_round == '':
            return None
        if game_round == '+':
            last_round = stack.pop()
            penultimate_round = stack.pop()
            current_round = penultimate_round + last_round

            stack.push(penultimate_round)
            stack.push(last_round)
            stack.push(current_round)
        elif game_round == 'D':
            last_round = stack.peek()
            current_round = last_round * 2
            stack.push(current_round)
        elif game_round == 'C':
            stack.pop()
        else:
            stack.push(int(game_round))
    total = 0
    while not stack.is_empty():
        total += stack.pop()

    return total

print(calculate_points(['5', '-2', '4', 'C', 'D', '9', '+', '+']))
#                     (['5', '-2', '4', 'C', 'D', '9', '+', '+']))  # 27




# Inteiro: Representa os pontos para a rodada;

# +: Os pontos para a rodada será o somatório das duas últimas rodadas válidas;

# D: Os pontos para a rodada será igual ao dobro da última rodada válida;

# C: Representa que os pontos da última rodada válida devem ser removidos;
