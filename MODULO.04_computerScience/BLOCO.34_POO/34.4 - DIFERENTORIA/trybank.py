class Conta:
    def __init__(self, nome, numero, saldo=0):
        self.nome = nome
        self.numero = numero
        self.saldo = saldo

    def deposito(self, valor):
        self.saldo += valor
    
    def saque(self, valor):
        if self.saldo > valor:
            self.saldo -= valor


class contaInvestimento():
    def __init__(self, numero, nome, saldo, taxaJuros): 
        Conta.__init__(self, numero, nome, saldo) 
        self.taxaJuros = taxaJuros 


# desse jeito apresenta erro =>
conta1 = contaInvestimento("Maria", 12345, 1200, 1.5)
print(vars(conta1))
conta1.deposito(200)
conta1.saque(500)
print(vars(conta1))


# desse jeito da certo =>
# conta1 = Conta("Maria", 12345, 1200)
# print(vars(conta1))
# conta1.deposito(200)
# conta1.saque(500)
# print(vars(conta1))
