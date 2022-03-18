# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre mantendo somente as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.

recuStudents = []
with open("Students.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
