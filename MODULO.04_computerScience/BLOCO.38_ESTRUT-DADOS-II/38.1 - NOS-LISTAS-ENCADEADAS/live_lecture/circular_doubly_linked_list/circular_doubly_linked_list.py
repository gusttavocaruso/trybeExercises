from doubly_node import DoublyNode


class CircularDoublyLinkedList:
    def __init__(self):
        self.head = DoublyNode("HEAD")
        self.head.previous = self.head
        self.head.next = self.head
        self.__length = 0

    def __str__(self):
        my_self = map(str, self.to_list())
        return f"CircularDoublyLinkedList(HEAD, {', '.join(my_self)}, HEAD)"

    def __len__(self):
        return self.__length

    def to_list(self):
        linked_list = []
        if self.head is None:
            return linked_list
        current = self.head.next
        while current != self.head:
            linked_list.append(current.value)
            current = current.next
        return linked_list

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        node_value = DoublyNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length += 1

    def insert_last(self, value):
        node_value = DoublyNode(value)
        node_value.previous = self.head.previous
        node_value.next = self.head
        self.head.previous = node_value
        node_value.previous.next = node_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.head.next
            element_later_than_removed = value_to_be_removed.next
            self.head.next = element_later_than_removed
            element_later_than_removed.previous = self.head
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.head.previous
            element_later_than_removed = value_to_be_removed.previous
            self.head.previous = element_later_than_removed
            element_later_than_removed.next = self.head
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed


if __name__ == "__main__":
    doubly = CircularDoublyLinkedList()
    print("\nA Lista esta vazia: ", doubly.is_empty(), doubly)
    print("[HEAD -> HEAD]")

    doubly.insert_last(1)
    doubly.insert_last(2)
    doubly.insert_last(3)
    doubly.insert_first(0)

    print("\nApós Inserir 1,2,3 do fim e 0 no início:\n", doubly)
    print("[HEAD -> 0 -> 1 -> 2 -> 3 -> HEAD]")

    doubly.remove_first()
    print("\nApós remover primeiro:\n", doubly)
    print("[HEAD -> 1 -> 2 -> 3 -> HEAD]")

    doubly.remove_last()
    print("\nApós remover último:\n", doubly)
    print("[HEAD -> 1 -> 2 -> HEAD]")

    print('Primeiro (head):', doubly.head.value)
    print('Anterior ao primeiro (head.previous):', doubly.head.previous.value)
