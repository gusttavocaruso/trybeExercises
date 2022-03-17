# Já sabemos que erros podem acontecer, e o sistema operacional normalmente espera que um programa escreva seus erros na saída de erros.
# Existe um parâmetro que nos permite modificar a saída padrão para a saída de erros:

import sys


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)

# Em Python , podemos fazer interpolação de variáveis e expressões utilizando f-string . Adicionamos um f antes das aspas e o valor de saída entre chaves. Essa dica é importante, pois é a maneira mais eficiente de formatar strings.
