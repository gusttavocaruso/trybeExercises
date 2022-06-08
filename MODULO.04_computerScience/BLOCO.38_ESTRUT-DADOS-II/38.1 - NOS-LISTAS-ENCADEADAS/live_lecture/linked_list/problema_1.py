"""
Dada uma lista não vazia,
unida individualmente com o nó principal,
retorne o node do meio da lista.
"""
from linked_list import LinkedList


def mid_element(linked_list: LinkedList):    # imprimir o elemento do meio
    position = len(linked_list) // 2
    print("Posição", position)
    return linked_list.get_element_at(position - 1)


if __name__ == "__main__":
    lecture_list = LinkedList()
    # print("\nLista Vazia: ", lecture_list)
    # print(mid_element(lecture_list))  # saída: None

    # Lista ligada atual = [1]
    lecture_list.insert_last(1)
    # print("\nApós Inserir 1:\n", lecture_list)
    # print(mid_element(lecture_list))  # saída: Node(value=1 next=None)

    lecture_list.insert_last(2)
    lecture_list.insert_last(3)
    # print("\nApós Inserir 2 e 3:\n", lecture_list)
    # print(mid_element(lecture_list))  # saída: Node(value=2 next=3)

    lecture_list.insert_last(4)
    print("\nApós Inserir 4:\n", lecture_list)
    print(mid_element(lecture_list))  # saída: Node(value=3 next=3)

    # print("posiçaõ 0", lecture_list.get_element_at(0))
    # print("posiçaõ 1", lecture_list.get_element_at(1))
    # print("posiçaõ 2", lecture_list.get_element_at(2))
    # print("posiçaõ 3", lecture_list.get_element_at(3))
