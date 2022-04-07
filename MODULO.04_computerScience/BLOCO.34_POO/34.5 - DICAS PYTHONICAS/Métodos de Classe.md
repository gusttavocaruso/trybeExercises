**Métodos de classe**

Um método de classe é uma espécie de função que está atrelada à classe e não ao objeto criado a partir dessa classe. Elas tem acesso ao estado da classe (as "propriedades" da classe) e, por isso, devem vir com um parâmetro de classe (muitas vezes, `cls`).

Ela pode modificar essas "propriedades", que serão aplicadas a todos os objetos criados a partir dela. Por exemplo, ela pode modificar um parâmetro da classe que será aplicado a todos os objetos criados a partir dela (as instâncias)

Quando queremos assinalar que um método é de classe, utilizamos o decorador `@classmethod` em cima do método. Além dele receber um parâmetro que referencie à classe.
