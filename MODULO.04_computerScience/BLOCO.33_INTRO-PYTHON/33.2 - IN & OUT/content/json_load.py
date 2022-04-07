import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista


# A leitura pode ser feita diretamente do arquivo, utilizando o método load ao invés de loads.
# O loads carrega o JSON a partir de um texto e o load carrega o JSON a partir de um arquivo.


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista
