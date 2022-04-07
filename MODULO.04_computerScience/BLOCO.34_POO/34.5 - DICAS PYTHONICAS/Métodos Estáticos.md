**Métodos estáticos**

Um método estático também é uma espécie de função que está atrelada à classe e não ao objeto criado a partir dessa classe, mas, de forma geral, eles não são ligados às "propriedades" da classe. Eles são métodos auxiliares que recebem alguns parâmetros e trabalham em cima deles, sem instanciar a classe em momento algum.

Quando queremos assinalar que um método é de classe, utilizamos o decorador @staticmethod em cima do método e ele não precisa referenciar a classe já que não vai instanciar ela.

Exemplo:
```python
  from datetime import date
    
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
        
      # um método de classe que cria uma Person a partir do ano de nascimento dela 
      @classmethod
      def fromBirthYear(cls, name, year):
          return cls(name, date.today().year - year)
        
      # um método estático que verifica se a pessoa é adulta ou não e retorna True ou False
      @staticmethod
      def isAdult(age):
          return age > 18
    
  person1 = Person('mayank', 21)
  # método criando um objeto a partir da classe
  person2 = Person.fromBirthYear('mayank', 1996)
    
  print (person1.age)
  print (person2.age)
    
  # método imprimindo o resultado de uma verificação
  print (Person.isAdult(22))
```
