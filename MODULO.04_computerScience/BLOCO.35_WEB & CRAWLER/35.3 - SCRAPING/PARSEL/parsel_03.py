import requests
from parsel import Selector


url_base = 'http://books.toscrape.com/'

response = requests.get(url_base)
selector = Selector(text=response.text)

all_thumb_url = selector.css("div.image_container a::attr(href)").getall()

for url in all_thumb_url:
  thumb_response = requests.get(f"{url_base}{url}")
  thumb_selector = Selector(text=thumb_response.text)

  book_title = thumb_selector.css('div.product_main h1').get()
  print(book_title)
