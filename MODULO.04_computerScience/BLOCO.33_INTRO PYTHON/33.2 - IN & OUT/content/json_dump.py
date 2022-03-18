# A escrita de arquivos no formato JSON é similar a escrita de arquivos comum, porém primeiro temos de transformar os dados.

import json

# Leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )  # conversão de Python para o formato json (str)
    file.write(json_to_write)


# Assim como a desserialização, que faz a transformação de texto em formato JSON para Python , a serialização, que é o caminho inverso, também possui um método equivalente para escrever em arquivos de forma direta.

# abre o arquivo para escrita
with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)
    # escreve no arquivo já transformando em formato json a estrutura


# Arquivos JSON não seguem a nomenclatura habitual de leitura e escrita ( write e read ), pois são considerados formatos de serialização de dados. Seguem então as mesmas nomenclaturas utilizadas em módulos como marshal e pickle , que também são formatos de serialização.
