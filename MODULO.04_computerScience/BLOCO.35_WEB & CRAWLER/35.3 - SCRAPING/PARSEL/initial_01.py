# python3 -m pip install parsel
import requests
from parsel import Selector


url = 'http://books.toscrape.com'

response = requests.get(url)
print(response.status_code)

selector = Selector(text=response.text)
print('selector only', selector)

selector_css_img_thumb = selector.css('img.thumbnail').getall() #.get() pega o 1elem
#selector_css_img_thumb retorna um array com todos elementos <img> com class=thumbnail

print(selector_css_img_thumb[0]) #retorna o elemento html correspondente ao [indice]
