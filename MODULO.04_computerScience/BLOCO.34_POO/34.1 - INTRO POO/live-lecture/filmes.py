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
