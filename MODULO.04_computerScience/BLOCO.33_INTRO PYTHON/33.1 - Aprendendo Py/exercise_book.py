# Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%.
# O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional.
# Qual é o custo total de atacado para 60 cópias?

preco_livro = 24.20
desconto = preco_livro * 0.4

livro_com_desconto = preco_livro - desconto
custo_transporte_60livros = (0.75 * 59) + 3
custo_60livros = livro_com_desconto * 60

custo_total60livros = custo_60livros + custo_transporte_60livros

print('O custo total de atacado para 60 cópias é: ', custo_total60livros)
