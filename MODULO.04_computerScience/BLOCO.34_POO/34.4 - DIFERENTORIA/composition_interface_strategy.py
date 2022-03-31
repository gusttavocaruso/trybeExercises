from abc import ABC, abstractmethod
from collections.abc import Iterable, Iterator


class IteradorStr(Iterator):
    def __init__(self, data) -> None:
        self.__data = data
        self.__index = 0

    def __next__(self):
        try:
            while type(self.__data[self.__index]) != str:
                self.__index += 1
            data = self.__data[self.__index]
            self.__index += 1
            return data
        except IndexError:
            raise StopIteration()


class IteradorInt(Iterator):
    def __init__(self, data) -> None:
        self.__data = data
        self.__index = 0

    def __next__(self):
        try:
            while type(self.__data[self.__index]) != int:
                self.__index += 1
            data = self.__data[self.__index]
            self.__index += 1
            return data
        except IndexError:
            raise StopIteration()
            

class NovaLista(Iterable):
    def __init__(self, data, estrategia_de_iteracao=IteradorStr) -> None:
        self.__data = data
        self.__estrategia = estrategia_de_iteracao


    def __iter__(self):
        return self.__estrategia(self.__data)


minha_lista = NovaLista([1, 2, 3, 'gato', 'pokemon', None, 1.9], IteradorInt)

for item in minha_lista:
    print(item)
