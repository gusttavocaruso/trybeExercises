# Nós falamos lá em cima que qualquer outra classe de compressor que surgir funcionará com nosso código! Certo? Observe que, pra isso acontecer, tal classe precisa, necessariamente, implementar a função .compress() com a mesma assinatura que nossas duas classes atuais.

# O grande risco que temos ao fazer composição é a classe que passarmos para a outra não ter o mesmo formato que imaginamos! Ou seja: se o nosso novo compressor não tiver uma função chamada compress que receba o mesmo parâmetro que definimos, usá-la dará erro. Como podemos garantir que isso nunca acontecerá? Nós podemos fazer um combinado na empresa mas, já diria o sábio:
# Um combinado que não está codado não existe. (Clarice Lispector)

# Como a gente coda um combinado ?! A resposta...? Definindo uma interface!

# Você, então, dita uma regra: Todo compressor deve ter uma função chamada compress que receba esse parâmetro! E como você faz isso?

from abc import ABC, abstractmethod
import gzip
from zipfile import ZipFile

class Compressor(ABC):
    def __init__(self, filepath='./'):
        self.filepath = filepath

    @abstractmethod
    def compress(self, file_name):
        raise NotImplementedError


class ZipCompressor(Compressor):
    def compress(self, file_name):
        with ZipFile(file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)


class GzCompressor(Compressor):
    def compress(self, file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)

# Com uma classe abstrata 😎

# Ou seja: todo compressor que for criado precisa ter uma função compress que receberá esse parâmetro específico para funcionar!

# Você usa uma classe abstrata com um método abstrato para definir uma interface que, através de herança , definirá o comportamento de todos os compressores futuros, assegurando que sua composição sempre funcionará!
