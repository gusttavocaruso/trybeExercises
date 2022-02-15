
-- Crie o arquivo Compose para subir um ghost blog , essa plataforma é similar com o Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

-- Utilize a versão "3" no arquivo;

-- Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine ;

-- Publique a porta 2368 , fazendo bind também para a 2368 ;

-- Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

-- Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

-- Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem mysql:5.7 ;

-- Precisamos definir uma senha root para o nosso bd , para isso utilize a variável MYSQL_ROOT_PASSWORD , lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host , para a env do container ;

-- Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável database__client para mysql ;

-- Defina o nome ghost para o nome do database utilizando a variável database__connection__database ;

-- E então, indique a conexão para o nosso MySQL na env database__connection__host ;

-- Para definir a pessoa usuária ( root ) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password .

-- Utilize a opção depends_on para criar relações de dependências entre os serviços.

-- Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

-- Agora vamos praticar os conceitos de volumes e networks .

-- Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target /var/lib/mysql .

-- Ao invés de utilizar a rede padrão criada pelo Compose , defina uma rede chamada my-network para a comunicação dos dois serviços.

-- Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

-- Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação React , conforme vimos alguns exemplos do conteúdo:

-- Inicie uma novo projeto ReactJS utilizando o create-react-app ;

-- Crie o Dockerfile , conforme vimos na aula passada;

-- Crie um novo arquivo Compose utilizando a versão 3 ;

-- Defina um serviço no arquivo para nosso app , para isso utilize a opção build para apontar para o Dockerfile ;

-- Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost ;

-- Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react , e então execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.
