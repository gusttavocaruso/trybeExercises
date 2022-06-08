class Stack():
    def __init__(self):
        self._data = list()     # usar estruturta de lista para guardar as informações da nossa pilha / 
                                # vamos usar no formato horizontal para atender nossa demanda e sair do modo tradicional

    def push(self, value):
        self._data.append(value)          # método push para fazer o empilhamento e adicionar no topo da pilha

    def pop(self):        # pop para remover item da pilha, no caso o ultimo item o topo
        if self.is_empty():   # se a pilha estiver vazia temos um tratamento para retornar none
            return None

        value = self._data[-1]   # -1 se refere ao último objeto da pilha conceito o python
        del self._data[-1]      # remove o valor do topo da pilha
        return value               # retorna o valor após o processo

    def peek(self):
        if self.is_empty():     # peek nos mostra qual o valor do ultimo elemento da pilha / consulta igual 38.2
            return None
        value = self._data[-1]
        return value

    def size(self):         # tamanho da minha pilha
        return len(self._data)

    def is_empty(self):         # indica se a pilha esta vazia ou não
        return not bool(self.size())

    def clear(self):            # função que limpa a pilha / sera tudo no caso
        self._data.clear()

    def __str__(self):          
        str_items = ""
        for i in range(self.size()):       # pega a nossa pilha e retorna num formato de string
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"