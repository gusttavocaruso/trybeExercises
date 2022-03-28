class pessoas:
    def __init__(self, nome, sexo, cpf, ativo):
        self.nome = nome
        self.sexo = sexo
        self.cpf = cpf
        self.ativo = ativo

    def desativar(self):
        self.ativo = False


if __name__ == "__main__":
    pessoa1 = pessoas("Tulio", "M", "123456789", True)
    print(pessoa1.nome)
    print(pessoa1.sexo)
    pessoa1.desativar()
    print(pessoa1.ativo)
