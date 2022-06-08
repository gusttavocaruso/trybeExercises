class Deque:                        # controle do array
    FIRST_ELEMENT = 0          # guardião da posição do elemento

    def __init__(self):
        self._data = []          # iniciando uma classe

    def __len__(self):
        return len(self._data)         # tamanho doa array ou imprimir toda a fila

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"     # imprimir a fila como string

    def push_front(self, value):
        self._data.insert(self.FIRST_ELEMENT, value)        # metodo faz o pus da fila no inicio

    def push_back(self, value):                 # metodo fz o pus da fila no fim
        self._data.append(value)             

    def pop_front(self):                        # remove no inico da fila
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)   
        return None

    def pop_back(self):              # remove no fim da fila
        if self._data:
            return self._data.pop()     
        return None

    def peek_front(self):                           # consulta inicio da fila
        if self._data:
            return self._data[self.FIRST_ELEMENT]   
        return None

    def peek_back(self):
        if self._data:                              # consulta fim da fila
            return self._data[len(self) - 1]     
        return None

    def clear(self):                                    # limpa a fila
        self._data.clear()     
