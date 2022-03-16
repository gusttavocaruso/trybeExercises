# Em alguns casos, que não prejudiquem a legibilidade, podemos criar estruturas de mapeamento ( dicts ) para simplificar o aninhamento de condicionais.

key = "id"
from_to = {
    "id": 'identifier',
    "mail": "email",
    "lastName": "last_name",
}

print(from_to[key]) # saída: 'identifier'
