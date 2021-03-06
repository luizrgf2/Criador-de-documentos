Criador de documentos.
======================

![](./images/Sem%20título.png)

A rota http://localhost:7000/contrato, ela irá gerar o contrato, deve ir
junto um json com as seguintes infomaçoes:
    
    {
        "nome":"Nome cliente" String,
        "cidade":"Cidade cliente" String,
        "estado":"Estado do cliente" String,
        "nome\_empresa":"Empresa do cliente" String,
        "bairro": "Bairro do cliente" String,
        "numero": Numero empresa cliente Inteiro,
        "hashcode": "Hascode documento" String,
        "ip":"Ip do cliente" String,
        "local":"Local de acesso na hora da geração do documento" String,
        "cnpj":"CNPJ empresa cliente" String,
        "cpf":"CPF cliente" String,
        "phone":"Número de telefone do cliente" String,
        "rua":"Rua da empresa", String
        "email":"Email do cliente" String,
        "cep":"CEP onde reside essa empresa" String,
        "porcentagem1": Primeiro número porcentagem Inteiro,
        "porcentagem2":Primeiro número porcentagem Inteiro,
        "porcentagem3":Primeiro número porcentagem Inteiro,
        "extenso1": "Nome por extenso do primeiro número" String,
        "extenso2":"Nome por extenso do segundo número" String,
        "extenso3":"Nome por extenso do terceiro número" String
    }
    Isso irá retornar o documento em pdf do contrato.

![](./images/Sem%20tw.jpg)

A rota http://localhost:7000/contrato, ela irá gerar o contrato, deve ir
junto um json com as seguintes infomaçoes:
    
    {
        "nome":"Nome cliente" String,
        "cidade":"Cidade cliente" String,
        "estado":"Estado do cliente" String,
        "bairro": "Bairro do cliente" String,
        "numero": Numero empresa cliente Inteiro,
        "cnpj":"CNPJ empresa cliente" String,
        "cpf":"CPF cliente" String,
        "phone":"Número de telefone do cliente" String,
        "rua":"Rua da empresa", String
        "email":"Email do cliente" String,
        "cep":"CEP onde reside essa empresa" String
    }
    Isso irá retornar o documento em pdf da franquia.

![](./images/get.png) \
A rota http://localhost:7000/docclient/"hashcode do documento"\
Basta apenas passar junto da url o hash do documento que irá retornar
apenas um documento pdf com as assinaturas para o cliente.


![](./images/relatorio.png)

A rota http://localhost:7000/relatorio, ela irá gerar o relatorio, deve ir
junto um json com as seguintes infomaçoes:
    
    {

        "nome_empresa":"Nome empresa" String,
        "cnpj":"cnpj da empresa" String,
        "valor1":Primeiro valor que aparece no documento Float ,
        "valor2":Segundo valor que aparece no documento Float

    }
    retorna o pdf do relatorio

![](./images/cfranqueado.png)

A rota http://localhost:7000/contratof, ela irá gerar o contrato de franqueado, deve ir
junto um json com as seguintes infomaçoes:
    
    {
        "nome":"Nome cliente" String,
        "cidade":"Cidade cliente" String,
        "estado":"Estado do cliente" String,
        "bairro": "Bairro do cliente" String,
        "numero": Numero empresa cliente Inteiro,
        "hashcode": "Hascode documento" String,
        "ip":"Ip do cliente" String,
        "local":"Local de acesso na hora da geração do documento" String,
        "cnpj":"CNPJ empresa cliente" String,
        "cpf":"CPF cliente" String,
        "phone":"Número de telefone do cliente" String,
        "rua":"Rua da empresa", String
        "email":"Email do cliente" String,
        "cep":"CEP onde reside essa empresa" String,
    }
    Isso irá retornar o documento em pdf do contrato de franqueado.

![](./images/contratop.png)

A rota http://localhost:7000/contratop, ela irá gerar o contrato de franqueado, deve ir
junto um json com as seguintes infomaçoes:
    
    {
        "nome":"Nome cliente" String,
        "cidade":"Cidade cliente" String,
        "estado":"Estado do cliente" String,
        "bairro": "Bairro do cliente" String,
        "numero": Numero empresa cliente Inteiro,
        "hashcode": "Hascode documento" String,
        "ip":"Ip do cliente" String,
        "cpf":"CPF cliente" String,
        "phone":"Número de telefone do cliente" String,
        "rua":"Rua da empresa", String
        "email":"Email do cliente" String,
        "cep":"CEP onde reside essa empresa" String,
        "porcent":"Porcentagem de ganho do parceiro" String,
        "doc":true => Esse campo é responsável por gerar o documento do cliente que acessado pela rota /docclient, caso seja false esse documento não será gerado junto do contrato do parceiro.
    }
    Isso irá retornar o documento em pdf do contrato de franqueado parceiro.