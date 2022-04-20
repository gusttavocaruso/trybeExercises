def sum_antc(n):
    if n == 0:
        return 0
    else:
        return n + sum_antc(n-1)


print(sum_antc(4))
