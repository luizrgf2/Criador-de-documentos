import requests


data ={
    "nome":"CARLOS HENRIQUE FREITAS LINS JATOBÁ",
    "cidade":"Fortaleza",
    "estado":"CE",
    "nome_empresa":"Aldeota",
    "bairro": "Bairro desconhecido",
    "numero": 6223,
    "hashcode": "a6f9ea06641bba53ff5d593ba3dc6776",
    "ip":"127.0.0.1",
    "local":"Lugar desconhecido",
    "cnpj":"40.015.211/0001-12",
    "cpf":"675.715.580-00",
    "phone":"(36) 998745646",
    "rua":"Rua Desconhecida",
    "email":"exemplo@gmail.com",
    "cep":"3870598",
    "porcentagem1":20,
    "porcentagem2":10,
    "porcentagem3":30,
    "extenso1": "VINTE",
    "extenso2":"DEZ",
    "extenso3":"TRINTA"
}


response = requests.post('http://localhost:7000/contratof',json=data)

print(response.status_code)