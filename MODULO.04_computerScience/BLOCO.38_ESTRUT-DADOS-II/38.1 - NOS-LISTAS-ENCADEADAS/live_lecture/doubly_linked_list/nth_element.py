from doubly_linked_list import DoublyLinkedList

# remover o enésimo nó do final de lista


def remove_nth_from_end(doubly_linked_list: DoublyLinkedList, position):
    # Mostrar a classe que esta sendo utilizada
    if doubly_linked_list.is_empty():  # se a lista estiver vazia retorna none
        return None

    length = len(doubly_linked_list)  # remover de trás pra frente

    if 1 <= position <= length:
        length -= position  # length a posição exata que vc quer remover
        doubly_linked_list.remove_at(length)

    return doubly_linked_list


if __name__ == "__main__":
    doubly = DoublyLinkedList()
    print("\nLista Vazia:\n", doubly)

    # Lista duplamente ligada atual = []:
    doubly.insert_last(1)
    doubly.insert_last(2)
    print("\nApós Inserir 1,2:\n", doubly)
    print("[HEAD -> 1 -> 2 -> TAIL]")

    print(remove_nth_from_end(doubly, 1))
    print("\nApós Remover 1:\n", doubly)
    print("[HEAD -> 1 -> TAIL]")

    doubly.insert_last(2)
    doubly.insert_last(3)
    doubly.insert_last(4)
    doubly.insert_last(5)
    print("\nApós Inserir 1,2,3,4,5:\n", doubly)

    # Lista duplamente ligada atual = [HEAD -> 1 -> 2 -> 3 -> 4 -> 5]
    remove_nth_from_end(doubly, 2)
    print("Após Remover 2:\n", doubly)

    # # Lista duplamente ligada atual = [HEAD -> 1 -> 2 -> TAIL]
    remove_nth_from_end(doubly, 100)
    print("\nApós Remover 100:\n", doubly)
