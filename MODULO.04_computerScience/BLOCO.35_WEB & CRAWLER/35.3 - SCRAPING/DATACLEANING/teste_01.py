# Estamos extraindo nossos dados, porém estes dados contém algumas "sujeiras" que podem atrapalhar em nossas análises. Por exemplo, pare pra olhar o preço do livro, viu algo diferente? O preço possui um caractere estranho Â£26.08 antes do seu valor. E a descrição do livro que contém o sufixo ...more .
# Seria conveniente, antes de estruturar e armazenar estes dados, que fizéssemos uma limpeza neles.
# No caso do valor, poderíamos utilizar uma expressão regular para remover os outros caracteres. O padrão é conter um símbolo de libra, seguido por números, ponto para separar casas decimais e dois números como casas decimais. Essa expressão regular pode ser feita da seguinte forma: £\d+\.\d{2} .
# Agora, para utilizar a expressão regular que fizemos, podemos substituir o método getall pelo método re , ou o método get por re_first . Ambos, além de recuperar valores, aplicarão a expressão regular sobre aquele valor.

from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

# Extrai todos os preços da primeira página
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)
