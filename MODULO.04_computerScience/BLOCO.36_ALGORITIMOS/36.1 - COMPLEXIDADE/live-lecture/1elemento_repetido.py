def more_than_twenty_five_percent(array):

    twenty_five_percent = len(array) // 4
    sevent_five_percent = len(array) - twenty_five_percent

    for index, element in enumerate(array[:sevent_five_percent]):

        if element == array[index + twenty_five_percent]:
            return element
    return -1

if __name__ == "__main__":
    test1 = [1, 2, 2, 3, 3, 6, 6, 6, 6, 7, 10]
    print(f"O elemento encontrado para o teste1: {test1}")
    print(f"foi {more_than_twenty_five_percent(test1)}")

