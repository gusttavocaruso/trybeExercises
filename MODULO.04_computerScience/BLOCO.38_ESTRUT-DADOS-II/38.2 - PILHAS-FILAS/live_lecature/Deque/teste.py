# A B C D E

from collections import deque

fila = deque(['A', 'B', 'C', 'D'])

fila.append('E')

fila.popleft()

print(fila)

