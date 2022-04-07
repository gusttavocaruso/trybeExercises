O venv é um módulo, já embutido na linguagem, que **serve para isolar ambientes entre projetos**. Ou seja, eu consigo ter dois projetos rodando, em dois ambientes diferentes, com versões diferentes de uma mesma biblioteca.

Na prática, o que vamos fazer é instalar as bibliotecas em um diretório, que está relacionado ao projeto. Assim, cada projeto pode ter suas próprias bibliotecas na versão que quiser. A ideia é a mesma do npm que vocês já vêm usando.

O comando para criação deste ambiente isolado é

  - `python3 -m venv .venv` ,

sendo que .venv é o nome do ambiente isolado.
**Este comando deve ser executado na raiz do projeto.**

Depois de criado, temos de ativar este ambiente para usá-lo. Isto é importante, pois sempre que decidirmos trabalhar neste projeto devemos repetir este passo

  - `source .venv/bin/activate`

Você pode conferir se o comando de ativação do ambiente virtual deu certo com o seguinte comando:

  - `which python3`

Para Desativar o ambiente virtual, basta digitar:

  - `deactivate`

Criar arquivos requirements.txt e listar todas dependencias daquele ambiente de desenvolvimento (.venv), no ambiente:

  - `pip freeze > requirements.txt`
  (requirements.txt ~= package.json)

Para instalar todas dependencias do arquivo requirements, dentro do ambiente (.venv):

  - `python3 -m pip install -r requirements.txt`
