from pymongo import MongoClient
# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()

# o banco de dados catalogue será criado se não existir
db = client.catalogue

# a coleção books será criada se não existir
students = db.books


# book representa um dado obtido na raspagem
book = { "title": "A Light in the Attic" }

documents = [
    { "title": "Tipping the Velvet" },
    { "title": "Soumission" },
]

# inserir um dado por vez no banco
document_id = students.insert_one(book).inserted_id

# inserir multiplos dados no banco
db.books.insert_many(documents)


print(document_id)


client.close()  # fecha a conexão com o banco de dados
