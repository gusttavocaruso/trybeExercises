permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves
permissions.add("root")  # adiciona um novo elemento ao conjunto
permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.union({"user"})  # retorna um conjunto resultado da união
permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# ==================
all_users = { 'Alberto', 'Gabi', 'Letícia', 'Lucca', 'Nakano', 'Matheus' }
data_squad = { 'Gabi', 'Nakano', 'Lucca' }
admin_user = { 'Alberto', 'Gabi' }


admin_n_data = admin_user.intersection(data_squad)
standard_access_users = all_users.difference(admin_user)

data_to_admin = admin_user.union(data_squad)

print('adm e do time de data', admin_n_data)
print('usuario não adm', standard_access_users)
print('tornando equipe de data admin', data_to_admin)
