# Já para o caso do sufixo ...more , poderíamos utilizar fatiamento para removê-lo. Mas, antes, é importante verificarmos se o conteúdo possui o sufixo, evitando assim perda de conteúdo de forma acidental. Vamos ver como isso funciona no arquivo teste.py .

from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
