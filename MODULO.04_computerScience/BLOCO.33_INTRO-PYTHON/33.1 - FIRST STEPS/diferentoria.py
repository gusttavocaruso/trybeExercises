students = ["Bruno", "Matheus", "Ricardo"]
print(students[0])
print(students[-1])

mentoria = ["Diego", "Carol"]
mentoria.append("Felipe")
print(mentoria)
print(mentoria[2])

mentoria.extend(students)
mentoria.sort()
print(sorted(mentoria))
print(mentoria)

semana = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"]

print(semana[:2])
print(semana[2:])
print(semana[0:5:2])
print(semana[0::2])
print(semana[-1::-2])
print(semana[::1])
print(semana[::2])

numbers=[]
for n in range(1,11):
  numbers.append(n)

numbers=[n*2 for n in range(1,11)]
print(numbers)
