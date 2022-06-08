"""
Em softwares científicos, existe o constante desejo de otimizações,
principalmente em operações que são realizadas frequentemente.

Assim, iremos aprimorar a estrutura da nossa classe LinkedList para otimizar
a operação de inserção (no final).

Como essa operação possui, até o momento,
a complexidade O(n), nosso objetivo é torná-la O(1).
Para isso, nós criaremos uma nova classe, chamada LinkedListGuardian para
fazermos a refatoração.
"""

from node import Node


class LinkedListGuard:
    def __init__(self):
        self.head = Node("HEAD")
        self.tail = self.head
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head}"

    def __len__(self):
        return self.__length

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head.next

        if self.head.next is None:
            self.tail = first_value

        self.head.next = first_value
        self.__length += 1

    def insert_last(self, value):
        new_last_value = Node(value)
        self.tail.next = new_last_value
        self.tail = self.tail.next
        self.__length += 1


if __name__ == "__main__":
    lecture_list = LinkedListGuard()
    lecture_list = LinkedListGuard()

    print("\nLista Vazia: ", lecture_list)
    print("[HEAD -> (TAIL)]")
    # print("Cabeça Sentinela: ", lecture_list.head)
    # print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_last(1)
    print("\nApós adicionar 1: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_last(2)
    print("\nApós adicionar 2: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_first(0)
    print("\nApós adicionar 0 no começo: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    
    
    
    print("\nLista completa: ", lecture_list)
