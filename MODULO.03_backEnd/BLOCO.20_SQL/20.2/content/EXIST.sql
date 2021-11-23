-- O intuito principal do EXISTS é: Retornar os registros da tabela A que possuem um relacionamento com os registros da tabela B.

-- Use o banco de dados hotel para realizar os desafios a seguir:

-- ex1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT id, title FROM hotel.Books AS b
WHERE NOT EXISTS (
    SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id
);

-- ex2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT id, title FROM hotel.Books AS b
WHERE EXISTS (
    SELECT * FROM hotel.Books_Lent
    WHERE b.Title LIKE '%lost%'
);

-- ex3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `name` FROM hotel.Customers AS c
WHERE NOT EXISTS (
    SELECT * FROM hotel.CarSales
    WHERE customerid = c.customerid
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cus.name, car.name FROM hotel.Cars AS car
INNER JOIN hotel.Customers AS cus
WHERE EXISTS ( 
    SELECT * FROM hotel.CarSales
    WHERE CustomerID = cus.CustomerId
    AND carID = car.ID
);
