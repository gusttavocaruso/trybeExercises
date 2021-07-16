Passo a passo instalar 'pacote JEST'

1. 
Na pasta do projeto, abra o terminal e digite:
npm init -y

2.
Este comando acabou de criar o arquivo package.json.
Agora você precisa editar este arquivo, dentro do arquivo package.json

substituindo:
"test": "echo \"Error: no test specified\" && exit 1"
  
por:
"test": "jest"

3.
Agora, no terminal, digite o comando para instalar o JEST:
npm install --save-dev jest

Esse comando irá instalar tudo o que é necessário para o Jest,
criando a pasta node_modules e o arquivo package-lock.json.



Explicando o que são esses dois:

node_modules
  é a pasta que guarda todos os arquivos baixados das dependências instaladas.

package-lock.json 
  é um arquivo que “trava” as versões das dependências. Quando outra pessoa executar npm install ou npm i para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.
