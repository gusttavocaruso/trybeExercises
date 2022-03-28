# ----- introdução

##########################################################
class carro:
    velMax = 0
    ligado = False
    cor = ""
    consumo = ""


opala = carro()
gol = carro()
fusca = carro()

opala.velMax = 200
opala.cor = "vermelho"
opala.ligado = True
opala.consumo = "se é doido bebe demais"

print("velocidade maxima: " + str(opala.velMax))
print("cor: " + str(opala.cor))
estado = "sim" if opala.ligado else "não"
print("Ligado: " + str(opala.ligado))
print("consumo: " + str(opala.consumo))



##########################################################
class Filme:
    def __init__(self, nome, ano, duracao):
        self.nome = nome
        self.ano = ano
        self.duracao = duracao


class Serie:
    def __init__(self, nome, ano, temp):
        self.nome = nome
        self.ano = ano
        self.temp = temp


vingadores = Filme('vingadores - guerra infinita', 2018, 160)
print(vingadores.nome)

Chaves = Serie('atlanta', 2018, 2)
print(f'Nome: {Chaves.nome} - Ano: {Chaves.ano} - Temporadas: {Chaves.temp}')


##########################################################

class pessoa:
    def __init__(self, nome, sexo, cpf, ativo):
        self.nome = nome
        self.sexo = sexo
        self.cpf = cpf
        self.ativo = ativo

    def desativar(self):
        self.ativo = False
        print("A pessoa foi desativada com sucesso")


if __name__ == "__main__":
    pessoa1 = pessoa("Cristiano", "masculino", "123456789", True)
    print(pessoa1.nome)
    pessoa1.desativar()
    pessoa1.ativo = True
    print(pessoa1.ativo)

##########################################################

class Pessoa:
    def __init__(self, nome, sexo, cpf, ativo):
        self.__nome = nome
        self.__sexo = sexo
        self.__cpf = cpf
        self.__ativo = ativo
        
    def desativar(self):
        self.__ativo = False
        print("A pessoa foi desativada com sucesso")
        

if __name__ == "__main__":
    pessoa1 = Pessoa("João", "M", "123456", True)
    pessoa1.desativar()
    pessoa1.ativo = True
    print(pessoa1.ativo)
    
    # Utilizando geters e setters
    pessoa1.set_nome("José")
    print(pessoa1.get_nome())
