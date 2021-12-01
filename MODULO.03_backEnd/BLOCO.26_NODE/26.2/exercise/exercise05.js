const fs = require('fs').promises;

/* ===============>

<================ */ 

// Exercicio 04 Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

// 5.1 - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.

// 5.2 - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .

// 5.3 - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .

// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .
