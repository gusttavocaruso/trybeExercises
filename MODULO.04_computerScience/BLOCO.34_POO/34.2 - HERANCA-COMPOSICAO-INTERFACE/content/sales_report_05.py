# Se você instanciar vários ZipCompressor , o que muda entre uma instância e outra? A resposta? Nada! Quer você instancie um, dois, dez ZipCompressor , todas as instâncias serão absolutamente idênticas e farão a mesma coisa: terão o método compress com a assinatura que definimos e é isso.
# Para casos assim, podemos dizer que instanciar um objeto dessa classe é desnecessário! Tanto faz se invocamos a função com minha_instancia_de_zip_compressor.compress() ou ZipCompressor.compress() . Mas é possível fazer dessa segunda forma? É possível, em suma, invocar um método a partir de uma classe, e não de uma instância dela? Sim! Observe nossa refatoração:

from abc import ABC, abstractmethod
import gzip
import json
from zipfile import ZipFile


class Serializer(ABC):
    @abstractmethod
    def serialize(cls, data):
        raise NotImplementedError


class ZipCompressor(Serializer):
    FILE_PATH = './'

    '''Um método de classe é chamado diretamente da classe,
    sem uma instância, e ACESSA algum atributo ou método da classe!'''
    @classmethod
    def compress(cls, file_name):
        '''Repare que, acima, o atributo cls é como o self: o
        cls é a própria classe, passada automaticamente para
        um método de classe, enquanto o self é a instância'''
        with ZipFile(cls.FILE_PATH + file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)


class GzCompressor(Serializer):
    '''Um método estático é chamado diretamente da classe,
    sem uma instância, e NÃO ACESSA nenhum atributo ou método da classe!'''
    @staticmethod
    def compress(file_name):
        '''Como métodos estáticos não acessam classe nem instância,
        o Python não dá a eles nenhum primeiro parâmetro'''
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    FILE_EXTENSION = ''

    def __init__(self, export_file, compressor=GzCompressor):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        return [
                { 'Coluna 1': 'Dado 1', 'Coluna 2': 'Dado 2' },
                { 'Coluna 1': 'Dado A', 'Coluna 2': 'Dado B' },
              ]

    def get_export_file_name(self):
      return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())


class SalesReportJSON(SalesReport):
    FILE_EXTENSION = '.json'

    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    # Sua implementação vai aqui
    pass


# Para testar
relatorio_de_compras = SalesReportJSON('meu_relatorio_1')
relatorio_de_vendas = SalesReportJSON('meu_relatorio_2', ZipCompressor)

relatorio_de_compras.compress()
relatorio_de_vendas.compress()

# Ou seja: métodos de classe são chamados diretamente da classe, sem instâncias, e utilizam algum atributo ou função auxiliar da classe para funcionar! Métodos estáticos são chamados diretamente da classe e não utilizam nada dela.
