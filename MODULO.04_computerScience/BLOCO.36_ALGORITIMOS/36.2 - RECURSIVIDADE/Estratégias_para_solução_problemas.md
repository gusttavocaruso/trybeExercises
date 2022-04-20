## Iterativa

A solução iterativa é caracterizada pela repetição de uma determinada operação, procurando resolver algum problema encontrando sucessivas aproximações, a partir de uma suposição inicial. A ideia nesse tipo de processo é repetir um determinado cálculo várias vezes, obtendo-se a cada repetição, ou iteração, um resultado mais preciso que aquele obtido na iteração anterior. A cada iteração, utiliza-se o resultado da anterior como parâmetro de entrada para o cálculo seguinte. O resultado é uma sequência de valores aproximados, não exatos, mas que estão dentro de uma faixa de erro aceitável.


## x


## Força bruta

A força bruta, também conhecida como tentativa e erro ou busca exaustiva , é a estratégia mais trivial e intuitiva para solução de problemas. Ela consiste basicamente em enumerar todas as combinações possíveis para uma solução e avaliar se satisfazem o problema. Dessa forma, é possível escolher a melhor das soluções, ou seja, a solução ótima, mas apesar de trivial, em alguns casos, a força bruta possui desempenho geralmente muito ruim.


## x


## Dividir e conquistar

A estratégia dividir e conquistar , também chamada de divisão e conquista, consiste em dividir o problema em partes menores, encontrar soluções para as partes, e então combinar as soluções obtidas em uma solução global.

Usar essa estratégia para resolver problemas, nos quais os subproblemas são versões menores do problema original, geralmente leva à soluções eficientes e elegantes, especialmente quando é utilizado recursividade.

A estratégia emprega modularização de programas e frequentemente conduz a um algoritmo simples e eficiente. Esta técnica é bastante utilizada em desenvolvimento de algoritmos paralelos, onde os subproblemas são tipicamente independentes um dos outros, podendo assim serem resolvidos separadamente.

A modularização de um programa consiste em dividi-lo em partes funcionais que conversam entre si, tornando o software mais eficiente.

A técnica de Divisão e Conquista consistem em três passos:
  - Divisão : dividir a instância do problema original em duas ou mais instâncias menores, considerando-as como subproblemas;
  - Conquista : resolver cada subproblema recursivamente;
  - Combinação : combinar as soluções encontradas em cada subproblema, compondo uma solução para o problema original.