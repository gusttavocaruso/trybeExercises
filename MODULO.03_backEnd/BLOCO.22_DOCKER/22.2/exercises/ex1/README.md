ex2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
NO TERMINAL  ==> docker run -d --name site-trybe2 -p 4545:80 
<!-- funciona sem essa parte:
-v "<ENDEREÇO_DA_SUA_MAQUINA>" httpd:2.4
 -->

ex3. NO TERMINAL ===> Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
NO TERMINAL ==> http://localhost:4545/

ex5. Obtenha o id do container httpd:2.4
NO TERMINAL ==> docker ps

ex6. Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host .
NO TERMINAL ==>   docker inspect <CONTAINER_ID>
A saída esperada em Mounts é a seguinte:

"Mounts": [
            {
                "Type": "bind",
                "Source": "<ENDEREÇO_DA_SUA_MAQUINA>",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ]

ex7. Agora pare o container httpd:2.4
NO TERMINAL ==>  docker stop <CONTAINER_ID>

ex8. Exclua o seu container;
NO TERMINAL ==>  docker rm <CONTAINER_ID>

ex9. Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar
NO TERMINAL ==> cd <ENDEREÇO_DA_SUA_MAQUINA>
                ls -la

ex10. Obtenha o IMAGE ID do servidor;
NO TERMINAL ==>  docker images

ex11. Depois de obter o IMAGE ID , exclua a imagem.
NO TERMINAL ==>  docker rmi -f <IMAGE_ID>
