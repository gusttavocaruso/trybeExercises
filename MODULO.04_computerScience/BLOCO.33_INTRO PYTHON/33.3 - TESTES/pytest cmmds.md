⚠️ Lembre-se de instalar a biblioteca somente no ambiente virtual do seu projeto.
A instalação é feita através do pip utilizando o comando:

`python3 -m pip install pytest`

E podemos verificar utilizando o comando:

`python3 -m pytest --version`

A saída esperada é similar à apresentada abaixo.

`This is pytest version 5.3.0, imported from /home/cassiobotaro/projects/gerenciador-tarefas/.venv/lib/python3.8/site-packages/pytest.py`


Uma função de teste é similar a qualquer outra, porém tem o propósito de verificar se o resultado obtido foi o mesmo do esperado. No código isto pode ser visto através da utilização da palavra reservada assert.

O comando assert funciona da seguinte maneira: caso a expressão recebida seja verdadeira (avaliada como True ), nada acontece, porém caso seja falsa (avaliada como False ), uma exceção do tipo AssertionError é lançada.

A pytest captura este erro e tenta apresentar uma comparação entre o esperado e o recebido da melhor maneira possível.
