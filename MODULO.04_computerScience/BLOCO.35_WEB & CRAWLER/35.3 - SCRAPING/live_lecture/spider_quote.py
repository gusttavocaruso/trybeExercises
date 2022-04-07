# from asyncio import selector_events
import requests
import parsel


def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return ""
    
    return response.text


def extractor_quotes(text):
    selector = parsel.Selector(text)
    quotes = []

    for quote in selector.css("div.quote"):
        text = quote.css("span.text::text").get()
        author = quote.css("small.author::text").get()
        tags = quote.css("a.tag::text").getall()
        quotes.append({
            "text": text,
            "author": author,
            "tags": tags
        })

    return quotes

def get_all_quotes():
    base_url = "http://quotes.toscrape.com"
    next_page = "/"
    quotes = []
    while next_page:
        content = fetch_content(base_url + next_page)
        quotes.extend(extractor_quotes(content))

        next_page = parsel.Selector(content).css("li.next > a::attr(href)").get()

    return quotes


print(get_all_quotes())