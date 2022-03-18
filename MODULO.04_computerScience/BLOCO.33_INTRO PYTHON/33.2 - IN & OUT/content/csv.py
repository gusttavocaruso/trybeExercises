# O módulo csv , contêm duas principais funções:
# Um leitor ( reader ) que nos ajuda a ler o conteúdo, já fazendo as transformações dos valores para Python;
# E um escritor ( writer ) para facilitar a escrita nesse formato.
import csv


with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader

print(data)

# header, *data é um truque para separarmos o cabeçalho do restante dos dados. Quando há uma atribuição múltipla e o valor da direita ( beach_status_reader ) pode ser percorrido, o Python entende que deve atribuir cada um dos valores a uma variável da esquerda (header, *data), seguindo a ordem. Isto é chamado de desempacotamento de valores.
