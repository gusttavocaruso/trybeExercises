# A função open é a responsável por abrir um arquivo, tornando possível sua manipulação. Seu único parâmetro obrigatório é o nome do arquivo. Por padrão, arquivos são abertos somente para leitura, mas podemos modificar isto passando o modo com que vamos abrir o arquivo. No exemplo abaixo, estamos utilizando mode="w" , ou seja, estamos abrindo o arquivo para escrita:

file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.


# Para escrevermos um conteúdo em um arquivo utilizamos a função write :
file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")



# Assim como podemos redirecionar a saída do nosso programa para a saída de erros, podemos fazer o mesmo redirecionando o conteúdo digitado dentro de print para um arquivo. Ou seja, também podemos escrever em um arquivo através do print .
# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)



# Para escrever múltiplas linhas podemos utilizar a função writelines . Repare que a função espera que cada linha tenha seu próprio caractere de separação ( \n ):
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

# Abrimos o arquivo, escrevemos seu conteúdo, vamos então fechá-lo:
file.close()



# quando abrimos um arquivo dentro de um 'with', não é necessário usar close() no final, pois ele executará tudo dentro do bloco e quando sair do bloco, ele da close() sozinho

with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
