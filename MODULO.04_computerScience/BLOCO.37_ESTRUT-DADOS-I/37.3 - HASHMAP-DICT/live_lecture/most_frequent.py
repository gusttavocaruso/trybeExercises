def most_frequent(nums):
    if len(nums) == 0:
        return None

    most_frequent_num = nums[0]
    frequency = dict()

    for num in nums:  # O(n)
        if num not in frequency.keys():  # se num nao eh chave
            frequency[num] = 1  # eu insiro
        else:  # se for
            frequency[num] += 1  # incrementa

        if frequency[num] > frequency[most_frequent_num]:
            most_frequent_num = num

    return most_frequent_num


if __name__ == "__main__":
    test1 = [0, 0, -1, 3, 5, 1, 1, 5, 2, 0, 8, 1, -2, 0, 1]  # 0
    test2 = []  # None
    test3 = [1, 2, 3]  # 1
    test4 = [5, 5, 5, 2, 2, 3, 3, 3, 3, 10, 10, 10, 10, 10, 10]  # 10
    print(most_frequent(test1))
    print(most_frequent(test2))
    print(most_frequent(test3))
    print(most_frequent(test4))
