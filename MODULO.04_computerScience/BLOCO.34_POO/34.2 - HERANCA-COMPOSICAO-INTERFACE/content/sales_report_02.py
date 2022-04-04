# Nós queremos estender nosso código sem modificar o que já existe . Leia o código abaixo! Ele faz a mesma coisa que o código anterior, mas está refatorado. Ele usa, para resolver o nosso problema, os conceitos de classes abstratas, métodos abstratos e o conceito de herança .

from abc import ABC, abstractmethod
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
                { 'Coluna 1': 'Dado 1', 'Coluna 2': 'Dado 2' },
                { 'Coluna 1': 'Dado A', 'Coluna 2': 'Dado B' },
              ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

# 💡 Como boa prática, cada classe deve ser definida em seu próprio arquivo! Para nossos exercícios isso não é necessário
