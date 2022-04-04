import json


class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file + '.json'

    def build(self):
        return [
                { 'Coluna 1': 'Dado 1', 'Coluna 2': 'Dado 2' },
                { 'Coluna 1': 'Dado A', 'Coluna 2': 'Dado B' },
              ]

    def serialize(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(self.export_file, 'w') as file:
            json.dump(self.build(), file)


# O que fizemos até aqui? Nós acabamos de criar um objeto e dar a ele a capacidade de responder a mensagens!
# Classe, crie (em outras palavras, instancie!) uma nova entidade 'Relatório de vendas' para eu usar!

meu_relatorio_de_vendas = SalesReport('meu_relatorio')
meu_relatorio_de_vendas.serialize()
