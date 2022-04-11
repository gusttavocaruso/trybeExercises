import requests
from parsel import Selector


url = 'http://books.toscrape.com/'

response = requests.get(url)
selector = Selector(text=response.text)

thumb_url = selector.css("div.image_container a::attr(href)").get()

thumb_response = requests.get(f"{url}{thumb_url}")
thumb_selector = Selector(text=thumb_response.text)

book_title = thumb_selector.css('div.product_main h1').get()
print(book_title)
