/*
Esta é mais uma estrutura que não existe no JavaScript . A Interface é utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos. São uma forma eficiente de definir um "contrato de código", ou seja, aquilo que você espera que seja implementado, dentro do seu código.
Por exemplo, se quiséssemos criar uma interface que define as propriedades e métodos de uma pessoa funcionária, seria assim:
 */
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

/*
Uma interface não inicializa, nem implementa as propriedades declaradas dentro dela, porque o único trabalho de uma interface é descrever o objeto. Ela define o que o contrato de código exige, enquanto quem implementa a interface deve atender ao contrato fornecendo os detalhes de implementação necessários.
 */
let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  }
}

/*
Uma interface também pode estender de uma outra, o que permite que copiemos os membros de uma interface em outra, e proporciona mais flexibilidade na maneira de separará-las em componentes reutilizáveis. Porém, para implementar uma interface que estende outra interface precisamos implementar todas as propriedades necessárias de todas as interfaces.
Podemos estender uma interface , usando a palavra reservada extends :
 */
interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

// E para criar uma variável do tipo Teacher seria assim:
let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

/*
Observe que a interface que estende deve ter as mesmas propriedades da interface base, mas também pode possuir suas próprias propriedades.
Classes também podem implementar interfaces , o que faz com que a classe possua todas as propriedades e métodos daquela interface . */
