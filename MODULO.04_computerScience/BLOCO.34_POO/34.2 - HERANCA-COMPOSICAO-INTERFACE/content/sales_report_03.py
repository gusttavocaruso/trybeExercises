# Vamos à mais uma demanda! Os nossos relatórios estão muito grandes, então determina-se que todo relatório deve ser compactado para transitar pelos servidores da empresa! Isso é super importante para economizar rede e disco. Vamos, então, dar aos nossos relatórios a capacidade de se comprimirem!

from abc import ABC, abstractmethod
import gzip
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
                { 'Coluna 1': 'Dado 1', 'Coluna 2': 'Dado 2' },
                { 'Coluna 1': 'Dado A', 'Coluna 2': 'Dado B' },
              ]

    def compress(self):
        binary_content = json.dumps(self.build()).encode('utf-8')

        with gzip.open(self.export_file + '.gz,', 'wb') as compressed_file:
            compressed_file.write(binary_content)

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    # Sua implementação vai aqui
    pass

# Repare que adicionamos o comportamento à classe ascendente ! Fazemos isso porque todos os relatórios terão que ser comprimidos. Isso não é um comportamento especializado, é geral! Então faz sentido torná-la parte da interface da classe. E nossa linguagem permite que classes abstratas tenham métodos concretos (ou seja, que fazem coisas de verdade). As classes herdeiras não são obrigadas a re-implementar esses métodos, apenas os abstratos!
