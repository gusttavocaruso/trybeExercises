from pymongo import MongoClient

# client = MongoClient()
# db = client.catalogue

# # busca um documento da coleção, sem filtros
# print(db.books.find_one())

# # busca utilizando filtros
# for book in db.books.find({"title": {"$regex": "t"}}):
#     print(book["title"])

# client.close()  # fecha a conexão com o banco de dados


# ******** ============= \/ =============== *********
# O nosso cliente é um gerenciador de contexto ( with ), logo podemos utilizá-lo como tal, evitando problemas com o fechamento da conexão com o banco de dados:

with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
