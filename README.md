Criador de documentos.
======================

![](./images/Sem%20título.png)

A rota http://localhost:400/contrato, ela irá gerar o contrato, deve ir
junto um json com as seguintes infomaçoes:\
 {\
 "nome":"Nome cliente" String,\
 "cidade":"Cidade cliente" String,\
 "estado":"Estado do cliente" String,\
 "nome\_empresa":"Empresa do cliente" String,\
 "bairro": "Bairro do cliente" String,\
 "numero": Numero empresa cliente Inteiro,\
 "hashcode": "Hascode documento" String,\
 "ip":"Ip do cliente" String,\
 "local":"Local de acesso na hora da geração do documento" String,\
 "cnpj":"CNPJ empresa cliente" String,\
 "cpf":"CPF cliente" String,\
 "phone":"Número de telefone do cliente" String,\
 "rua":"Rua da empresa", String\
 "email":"Email do cliente" String,\
 "cep":"CEP onde reside essa empresa" String,\
 "porcentagem1": Primeiro número porcentagem Inteiro,\
 "porcentagem2":Primeiro número porcentagem Inteiro,\
 "porcentagem3":Primeiro número porcentagem Inteiro,\
 "extenso1": "Nome por extenso do primeiro número" String,\
 "extenso2":"Nome por extenso do segundo número" String,\
 "extenso3":"Nome por extenso do terceiro número" String\
 }\
 Isso irá retornar o documento em pdf do contrato.

![](./images/Sem%20tw.jpg)

A rota http://localhost:400/contrato, ela irá gerar o contrato, deve ir
junto um json com as seguintes infomaçoes:\
 {\
 "nome":"Nome cliente" String,\
 "cidade":"Cidade cliente" String,\
 "estado":"Estado do cliente" String,\
 "bairro": "Bairro do cliente" String,\
 "numero": Numero empresa cliente Inteiro,\
 "cnpj":"CNPJ empresa cliente" String,\
 "cpf":"CPF cliente" String,\
 "phone":"Número de telefone do cliente" String,\
 "rua":"Rua da empresa", String\
 "email":"Email do cliente" String,\
 "cep":"CEP onde reside essa empresa" String,\
 }\
 Isso irá retornar o documento em pdf da franquia.

![](./images/get.png) \
A rota http://localhost:400/docclient/"hashcode do documento"\
 Basta apenas passar junto da url o hash do documento que irá retornar
apenas um documento pdf com as assinaturas para o cliente.
