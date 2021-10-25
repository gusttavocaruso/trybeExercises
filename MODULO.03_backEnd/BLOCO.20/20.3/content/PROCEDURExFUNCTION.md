Stored Procedures podem ser chamadas através do comando CALL , e o retorno de um valor é opcional;

Já as Stored Functions são executadas com o comando SELECT e obrigatoriamente retornam algum valor;

A Stored Functions não pode ser utilizada para alterar o estado global da base dados. (Ex. Por meio das instruções INSERT , UPDATE e DELETE );

Stored Procedures permite alterar o estado global.

Stored Procedures permitem realizar o tratamento de excepções, via try/catch .


PS:
Para tornar a leitura do seu código mais fácil e sua manutenção mais simples, siga o seguinte padrão ao nomear suas procedures e functions:

-- Verbo + Resultado
ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto
