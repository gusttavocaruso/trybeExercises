# Dockerfile utilizando a imagem chuanwen/cowsay
FROM chuanwen/cowsay:latest

# Agora defina um ENTRYPOINT para a execução do comando, lembre-se que com ele, diferente do CMD o comando não poderá ser sobrescrito com o docker run , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem.
ENTRYPOINT [ "/usr/games/cowsay" ]

# Utilize o CMD para definir uma mensagem padrão.
CMD [ "#VQV Trybe" ]

# Builde e execute um container baseado em sua imagem sem passar nenhum comando.
# NO TERMINAL ==> docker image build ./ -t cowsay

# Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "#VQV TRYBE" , para exibir um dragão junto com a vaquinha.
# NO TERMINAL ==> docker container run cowsay -f moofasa "#VQV TRYBE"
