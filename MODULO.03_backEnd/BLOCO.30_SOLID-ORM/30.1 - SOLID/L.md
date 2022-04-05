L iskov substitution principle ( Princípio de substituição de Liskov )

objetos em um programa devem ser substituíveis por outros de suas classes herdeiras, sem que isso quebre nada. Isso significa que, para a substituição ser possível, os subtipos devem seguir a interface de um tipo base;

Ou seja, classes herdeiras devem sempre respeitar a interface de suas classes ascendentes! Elas podem especializar comportamentos, mas nunca removê-los! Caso contrário seu código fica cada vez mais difícil de usar, reusar e entender o que se faz
