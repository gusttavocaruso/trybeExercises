def convert(n):
    result, resto = divmod(n, 2)
    if n > 1:
        convert(result)
    print(resto, end='')

convert(10)

print("\n")


