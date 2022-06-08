from deque import Deque

class Queue:
    def __init__(self):   # faz o push dos elementos da fila
        self._data = Deque()

    def enqueue(self, value):
        self._data.push_back(value)     # enfileirar

    def dequeue(self):
        return self._data.pop_front()   # desinfileirar

    def peek(self):
        return self._data.peek_front()   # consulta o primeiro elemento da fila

    def is_empty(self):
        return not self._data       # false o true se a fila esta vazia 

    def clear(self):
        self._data.clear()          # limpa a fila


if __name__ == "__main__":
    queue_live = Queue()
    elements = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

    for elem in elements:
        queue_live.enqueue(elem)

print(queue_live.is_empty()) # saber se a lista esta vazia: true ou false
print(queue_live.peek()) # consulta
print(queue_live.dequeue()) # desinfileirar
print(queue_live.peek()) # consulta
print(queue_live.clear()) # consulta