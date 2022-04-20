### Todos os algoritmos recursivos devem obedecer a três leis importantes:

1) Um algoritmo recursivo deve ter um caso base : quando falamos de recursão, devemos sempre lembrar do caso base, pois sem ele nosso algoritmo ficará executando infinitamente. O caso base é a condição de parada do algoritmo recursivo, ele é o menor subproblema do problema, tornando-o possível de resolvê-lo de forma direta/trivial;

2) Um algoritmo recursivo deve mudar o seu estado e se aproximar do caso base : após o início da execução de um algoritmo recursivo, a cada nova chamada a ele mesmo, o seu estado deve se aproximar cada vez mais do caso base. Por exemplo, vamos imaginar o seguinte: queremos criar um código que irá printar números a partir de 0 e terminar em 10. O caso base do algoritmo é 10 , pois é onde nossa função recursiva deve parar a execução. A primeira chamada a função terá o número 0 passado de parâmetro. A cada nova chamada à função, nosso estado deve incrementar o valor 1 ao valor do estado anterior, até chegar ao número 10. Logo, o valor do estado na primeira chamada será 0, na segunda chamada será 1, na terceira chamada será 2, e assim por diante até chegar ao valor do caso base;

3) Um algoritmo recursivo deve chamar a si mesmo, recursivamente : Essa lei é a própria definição de recursão.


### Estrutura básica de uma função recursiva:

Nome da função e parâmetro:
    Condição de parada

    Chamada de si mesma

Declaramos uma função com um parâmetro. Dentro da função criada, definimos qual é a condição de parada da função. A condição de parada faz uma comparação entre o valor da condição com o parâmetro que a função está recebendo. Caso a condição não se satisfaça, a função é chamada novamente com um novo parâmetro. Caso contrário a execução para na condição de parada.
