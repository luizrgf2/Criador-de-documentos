from flask import Flask,request,send_file
from main import Doc
from platform import system
import os


app = Flask('Gerador contrato')
@app.route('/contrato', methods=['POST'])
def gerar_contrato():

    
    
    
    
    json_request = request.get_json()

    
    name = json_request['nome']
    cidade = json_request['cidade']
    estado = json_request['estado']
    nome_empresa = json_request['nome_empresa']
    bairro = json_request['bairro']
    numero = json_request['numero']
    hashcode = json_request['hashcode']
    ip = json_request['ip']
    local = json_request['local']
    cnpj = json_request['cnpj']
    cpf = json_request['cpf']
    phone = json_request['phone']
    rua = json_request['rua']
    email = json_request['email']
    cep = json_request['cep']
    porcent1 = json_request['porcentagem1']
    porcent2 = json_request['porcentagem2']
    porcent3 = json_request['porcentagem3']
    est1 = json_request['extenso1']
    est2 = json_request['extenso2']
    est3 = json_request['extenso3']


    documento = Doc()
    file = documento.edit_html(nome_empresa,cnpj,name,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,porcent1,est1,porcent2,est2,porcent3,est3,hashcode,ip,local)

    return send_file(file,attachment_filename='contrato.pdf')
@app.route('/franquia', methods=['POST'])
def gerar_franquia():
    json_request = request.get_json()

    
    name = json_request['nome']
    cidade = json_request['cidade']
    estado = json_request['estado']
    bairro = json_request['bairro']
    numero = json_request['numero']
    cnpj = json_request['cnpj']
    cpf = json_request['cpf']
    phone = json_request['phone']
    rua = json_request['rua']
    email = json_request['email']
    cep = json_request['cep']


    documento = Doc()
    file = documento.edit_another_html(name,cpf,phone,rua,email,numero,cnpj,bairro,cidade,estado,cep)
    return send_file(file,attachment_filename='franquia.pdf')
@app.route('/docclient/<id>',methods=['GET'])
def pegar_doc_cliente(id):

    file_reader = None

    if system() == 'Linux':
        try:
            file_reader = open(os.getcwd()+'/'+'pdfs/'+f'{id}.pdf','rb')
        except:
            return 'Não existe este arquivo!'
    else:
        try:
            file_reader = open(os.getcwd()+'\\'+'pdfs\\'+f'{id}.pdf','rb')
        except:
            return 'Não existe este arquivo!'
            
    return send_file(file_reader,attachment_filename='doccliente.pdf')

app.run(port=7000)



      






