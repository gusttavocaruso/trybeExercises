""" É possível criar uma progressão aritmética a partir de uma lista?  """

def progressao_aritmetica(nums):
    nums.sort()

    common_difference = nums[1] - nums[0]
    for index in range(1, len(nums)):
        if nums[index] - nums[index - 1] != common_difference:
            return False
    return True

if __name__ == "__main__":
    test1 = [1, 5, 3]                           
    print(f"Entrada {test1} Saída: {progressao_aritmetica(test1)}.")

