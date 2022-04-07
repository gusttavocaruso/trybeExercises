**Método abstrato**:

Uma classe abstrata não pode ser instanciada, ou seja, não se pode criar objetos a partir dela. Ela também não tem implementação. Ela está mais ligada ao conceito de Herança em POO, como se fosse uma API pra um conjunto de subclasses.

Usamos esse conceito quando queremos criar uma interface comum para diferentes implementações de uma tarefa. Esse uso é útil em situações onde esse conjunto de subclasses tem implementações distintas, mas que, de alguma forma, estão conectadas.

O método também leva o decorador @abstractmethod e a classe abstrata recebe como parâmetro ABC, que significa abstract base classes, cu7ja função é criar um método abstrato.

Exemplo:
```python
  from abc import ABC, abstractmethod
  
  class Polygon(ABC):
      # método abstrato comum à todas as classes herdeiras
      @abstractmethod
      def sides(self):
          pass
  
  class Triangle(Polygon):
  
      # sobrescrevendo o método abstrato 
      def sides(self):
          print("I have 3 sides")
  
  class Pentagon(Polygon):
  
      # sobrescrevendo o método abstrato 
      def sides(self):
          print("I have 5 sides")
```