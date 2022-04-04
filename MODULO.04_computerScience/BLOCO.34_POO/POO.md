## PILARES DA OOP => 

### ABSTRAÇÃO = 'Crie entidades'

- No contexto de orientação a objeto, este conceito está ligado à definição de características de uma classe de forma abstrata, que aqui significa definir uma classe focando nas mensagens que ela responde e nos atributos de que precisa.
Apesar de termos definido o pilar dessa forma, entenda que a palavra abstração pode ser usada em outros contextos, se referindo a outras coisas. É importante não confundir as coisas!

### ENCAPSULAMENTO = 'Não preciso saber como tudo funciona', apenas preciso saber: como instancio, e como que eu chamo os métodos.

- Encapsulamento se trata de esconder parte da implementação de uma classe, exibindo de forma pública somente aquilo que é necessário para que o cliente consuma sua classe e deixando detalhes da implementação protegidos ou privados. Porém, apesar de darmos nomes a essas restrições de visibilidade, elas podem ser implementadas de diferentes maneiras dependendo de linguagem para linguagem e não necessariamente precisam ter uma palavra-chave associada (como é o caso do Python e do JavaScript, por exemplo).

### HERANÇA =  especializar o comportamento de uma classe. A classe herdeira é tudo que a classe ascendente é e um pouco mais! 

- A Programação Orientada a Objetos, portanto, te dá o poder de criar classes herdeiras que especializam, mais e mais, o comportamento das classes ascendentes! Não há limite pra quantidade de classes herdeiras que uma classe pode ter, mas é crucial que tais classes sempre sejam uma especialização de comportamento!

- A herança, como o próprio nome já diz, é o princípio que define que uma classe deve ser capaz de herdar seus atributos e métodos de outra. E embora a classe base possa ter tanto métodos abstratos (que precisam ser implementados) quanto métodos concretos (que já estão implementados), a boa prática diz que a herança deve ser usada apenas para especialização. Se você quer apenas compartilhar código, use composição.

### POLIMORFISMO = "qualidade ou estado de ser capaz de assumir diferentes formas"

- Em POO, o polimorfismo é caracterizado quando duas ou mais classes contêm implementações diferentes para métodos com a mesma interface.

### PILARES EM UMA FRASE = 
- Na Programação Orientada a Objetos, você deve criar entidades ( Abstração ) com as mensagens que escuta bem definidas ( Encapsulamento ), podendo especializar comportamentos de entidades ( Herança ) contanto que garanta que a forma de enviar mensagens é consistente ( Polimorfismo )

#

#### COMPOSIÇÃO = compartilhamento de código

- A Herança serve para especializar comportamentos, onde toda classe herdeira deve fazer tudo que a classe ascendente faz . Quando precisamos reusar código, ou os comportamentos começam a aparecer em somente algumas das classes herdeiras, prefira usar Composição ! Aí quem instância a classe escolhe com qual dependência (no nosso caso, o compressor) quer usá-la. O nome disso é Inversão de Dependência.


## METHOD =>

1. Vamos definir classes

2. Essas classes vão ter
  - atributos
  - métodos

3. Uma classe pode ser instanciada várias vezes
cada instancia é uma entidade baseada nessa classe

4. Instancia a classe em varias entidades



## DICT =>

Classe : Entidade "geral" que definimos com base no problema que queremos resolver.

Objeto : Entidade "específica", criada a partir das regras definidas pela entidade "geral". Pense que a classe é o molde e o objeto a escultura que o molde faz!

Instância : esse é novo! Sabe quando criamos um objeto a partir de uma classe! Então! Dizemos que esse objeto é uma instância dessa classe! Ou, também, dizemos que a classe instanciou um objeto!

Atributo : outro novo! Um atributo é uma informação de uma instância que você criou. O nome de um User, por exemplo.
Mensagem : Forma com que objetos interagem - chamando funções uns dos outros. Um chamado como esse é um envio de mensagem a outro objeto. "User, resete sua senha!"

Abstração : Pilar da Programação Orientada a Objetos. Se refere a sempre criar entidades que farão as ações que resolverão seu problema.

Encapsulamento : Pilar da Programação Orientada a Objetos. Se refere a poder instanciar uma entidade e enviar mensagens a ela sem saber como ela funciona por dentro

Herança : é uma forma de especializar o comportamento de uma classe com outra classe;

Classe Abstrata : uma classe que não pode ser instanciada. Utilizada para definir as funções comuns (nem sempre abstratas) e suas assinaturas;

Métodos Abstratos : um método, ou função, que precisa ser implementado por uma classe herdeira para funcionar corretamente. Criado para definir uma Interface ;

Interface : conjunto de métodos que um determinado objeto "possui" - ou, o conjunto de mensagens que um objeto é capaz de entender e responder para.

Composição : incorporar em um objeto outro objeto, para compartilhar código de maneira eficaz;

Métodos de classe : métodos que podem ser chamados diretamente pela classe definida, e não por sua instância, para definirmos quando instanciar um objeto dessa classe for desnecessário! Utilizam, obrigatóriamente, atributos ou métodos internos da classe em seu funcionamento;

Métodos estáticos : como os métodos de classe, mas não utilizam nada de sua classe em seu funcionamento.
