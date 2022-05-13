#Dado uma lista de inteiros,
#inverta a posição dos seus elementos

n = [1, 2, 3, 4, 5]
#n = [5, 4, 3, 2, 1]

def reverse(n):
    if len(n) == 0:
        return n
    return [n[-1]] + reverse(n[:len(n) - 1])

print(reverse(n))