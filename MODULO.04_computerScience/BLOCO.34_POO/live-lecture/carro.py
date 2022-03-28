class carro:
    velocidade = 0
    ligado = False
    cor = ""
    consumo = ""


opala = carro()
fusca = carro()
marea = carro()

opala.velocidade = 220
opala.cor = "verde"
opala.ligado = True
opala.consumo = "se tiver tem que bancar"


print("velocidade maxima: " + str(opala.velocidade))
print("Cor: " + str(opala.cor))
estado = "sim" if opala.ligado else "não"
print("ligado: " + str(fusca.ligado))
print(estado)
