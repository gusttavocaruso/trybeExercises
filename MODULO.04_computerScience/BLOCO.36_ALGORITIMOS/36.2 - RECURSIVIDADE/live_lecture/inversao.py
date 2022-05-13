niners = [8, 9, 70, 89, 100]

def reverse(niners):
    if len(niners) == 0:
        return niners
        print(niners)
    return (
        [niners[-1]]

        + reverse(niners[:len(niners)-1])
    )

print(reverse(niners))



