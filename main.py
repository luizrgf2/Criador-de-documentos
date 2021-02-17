from selenium import webdriver
import platform
import  os
from time import sleep as tm
import undetected_chromedriver
from datetime import datetime


class Doc:

    def __init__(self):
        
        undetected_chromedriver.install()

        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_argument('--no-sandbox')

        self.driver = webdriver.Chrome(executable_path=self.path_chromedriver(),chrome_options=options)
    def barra(self):

        if platform.system() == 'Linux':
            return '/'
        else:
            return '\\'
    def path_chromedriver(self):

        if platform.system() == 'Linux':
            return os.getcwd()+'/'+'chromedriver'
        else:
            return os.getcwd()+'\\'+'chromedriver.exe'
    def path_html(self):
        if platform.system() == 'Linux':
            return os.getcwd()+'/'+'docbase.html'
        else:
            return os.getcwd()+'\\'+'docbase.html'
    def path_html2(self):
        if platform.system() == 'Linux':
            return os.getcwd()+'/'+'docbase2.html'
        else:
            return os.getcwd()+'\\'+'docbase2.html'
    def path_html3(self):
        if platform.system() == 'Linux':
            return os.getcwd()+'/'+'Doccliente.html'
        else:
            return os.getcwd()+'\\'+'Doccliente.html'
    def edit_html(self,nome_empresa:str,cnpj:str,nome:str,cpf:str,email:str,phone:str,rua:str,numero:int,bairro:str,cidade:str,estado:str,cep:str,porcent:int,estenso:str,porcent2:int,estenso2:str,porcent3:int,estenso3:str,hashcode:str,ip:str,loc:str):
        self.driver.get('file:///'+self.path_html())
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y1c ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{nome_empresa}'") #nome empresa
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y1f ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{cnpj}'")#cnpj
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h3 y22 ff2 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{nome}'") #nome do dono da empresa
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h3 y25 ff2 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{cpf}'") #cpf
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y28 ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{email}'") #email
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y2b ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{phone}'") #phone
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y2e ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{rua}'") #rua
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x5 h5 y31 ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{numero}'") #numero empresa
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y34 ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{bairro}'") #bairro
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x5 h5 y37 ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{cidade}'") #cidade
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x5 h5 y3a ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText = '{estado}'") #estado
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x5 h5 y3d ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{cep}'") #cep
        tm(1)
        self.text_porcentagem(porcent,estenso,porcent2,estenso2,porcent3,estenso3)
        tm(1)
        self.text_name_cnpj(nome,cnpj)
        tm(1)
        self.text_todos(nome,cnpj,nome_empresa,numero,rua,nome,cpf,bairro,cidade,phone,estado,cep)
        tm(1)
        self.assinar(nome,cpf,ip,loc,hashcode,email,cidade,estado)

        text_final = str(self.driver.page_source)

        open('edited.html','w',encoding='utf8').write(text_final)

        os.system('node index.js')

        self.edit_doc_cliente(nome,email,cpf,ip,loc,hashcode,cidade,estado)

        return open('contrato.pdf','rb')
    def text_porcentagem(self,porcent:int,estenso:str,porcent2:int,estenso2:str,porcent3:int,estenso3:str):

        line = f'percentual  de  {porcent}%  ({estenso}  por  cento)  sobre  o  valor  recuperado  que  tenha  sido  fornecido  em  crédito  tributário  ou '
        line2 = f'espécie,  sendo  {porcent2}%  ({estenso2}  por  cento)  referente  ao  custo  técnico  e  {porcent3}%  ({estenso3}  por  cento)  referente  ao  custo ' 
        line3 = 'operacional.'
        tamanho_line = len(line)



        if tamanho_line > 129:
            line2 = line[129:tamanho_line]+ line2
            line = line[0:129]

        tamanho_line2 = len(line2)
        if tamanho_line2 > 122:
            line3 = line2[122:tamanho_line2]+ line3
            line2 = line2[0:122]



                                                                                
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h5 y7c ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line}'")
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h5 y7d ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line2}'")
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h5 y7e ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line3}'")
    def text_name_cnpj(self,name:str,cnpj:str):

        line = f'Declaramos para  os  devidos  fins, como administrador  e  responsável legal  da  empresa  {name} '
        line2 = f' inscrita(o)  no  CNPJ  sob  o  nº  {cnpj},  que  as  informações  relativas  ao  período  de  análise ' 
        line3 = 'operacional.'
        tamanho_line = len(line)



        if tamanho_line > 129:
            line2 = line[129:tamanho_line]+ line2
            line = line[0:129]

        tamanho_line2 = len(line2)
        if tamanho_line2 > 122:
            line3 = line2[122:tamanho_line2]+ line3
            line2 = line2[0:122]




        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h3 y16d ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line}'")
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h3 y16e ff2 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line2}'")
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h5 y16f ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line3}'")
    def text_todos(self,name:str,cnpj:str,name_empresa:str,numero_empresa:int,rua:str,nome:str,cpf:str,bairro:str,cidade:str,phone:str,estado:str,cep:str):

        line = f'{name_empresa}, CNPJ n.º {cnpj}, sita a {rua}, nº {numero_empresa}, {bairro}, '
        line2 = f'{cidade},  {estado},  CEP  {cep},  telefone  {phone},  neste  ato  representada  por ' 
        line3 = f'{nome},  identificado  por  CPF/RG  {cpf},  com  poderes  para  assinar  procuração, '
        tamanho_line = len(line)



        if tamanho_line > 98:
            line2 = line[129:tamanho_line]+ line2
            line = line[0:129]

        tamanho_line2 = len(line2)
        if tamanho_line2 > 111:
            line3 = line2[122:tamanho_line2]+ line3
            line2 = line2[0:122]




        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x1a h3 y1c4 ff2 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line}'")
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x1a h5 y1c5 ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line2}'")
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x1a h3 y1c6 ff2 fs1 fc0 sc0 ls0 ws0'); a[0].innerText ='{line3}'")
    def edit_another_html(self,nome:str,cpf:str,phone:str,rua:str,email:str,numero:str,cnpj:str,bairro:str,cidade:str,estado:str,cep:str):
        self.driver.get('file:///'+self.path_html2())
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0'); a[0].innerText = '{nome}'")#nome
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0'); a[4].innerText = '{estado}'")#estado
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0'); a[3].innerText = '{bairro}'")#bairro
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xb h5 y15 ff3 fs3 fc0 sc0 ls3 ws0'); a[0].innerText = '       {cnpj}'")#cnpj
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0'); a[1].innerText = '{email}'")#email
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0'); a[2].innerText = '{phone}'")#phone
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xc h6 y1c ff4 fs3 fc0 sc0 ls0 ws0'); a[0].innerText = '{rua}'")#rua
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xb h6 y15 ff4 fs3 fc0 sc0 ls3 ws0'); a[0].innerText = '        {numero}'")#numero
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xb h6 y1c ff4 fs3 fc0 sc0 ls3 ws0'); a[0].innerText = '        {cidade}'")#cidade
        self.driver.execute_script(f"var a =  document.getElementsByClassName('t m0 xb h6 y15 ff4 fs3 fc0 sc0 ls3 ws0'); a[1].innerText = '        {cep}'")#cep

        text_final = str(self.driver.page_source)

        open('edited2.html','w',encoding='utf8').write(text_final)
        os.system('node index2.js')

        return open('franquia.pdf','rb')
    def assinar(self,nome:str,cpf:str,ip:str,loc:str,hashcode:str,email:str,cidade:str,estado:str):
        espaco = ' '*len(hashcode)
        hashfinal = espaco+hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x10 h10 y14a ff3 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{hashfinal}'") #hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x18 h12 y1a9 ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{hashfinal}'") #hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x18 h12 y1fd ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{hashfinal}'") #hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x18 h12 y24f ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{hashfinal}'") #hashcode
        
        text_hash = f'{hashcode}. Acesse o'
        
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h12 y161 ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{text_hash}'") #hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h12 y1b8 ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{text_hash}'") #hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h12 y1b8 ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{text_hash}'") #hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h12 y25f ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{text_hash}'") #hashcode
        
        data = datetime.now()
        data_final = f'{data.day}/{data.month}/{data.year} {data.hour}:{data.minute}'




        



        ass1 = f'{data_final} Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y150 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc
        ass1 = f'{data_final} Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y153 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc
        ass1 = f'{data_final} Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y157 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc

        #assinatura do cliente

        name = self.pegar_nome(nome)
        
        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y15a ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'visualizou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h3 y15b ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y15d ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'assinou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h3 y15e ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc


        #assinatura so do cliente

        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y1b1 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'visualizou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h3 y1b2 ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y1b4 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'assinou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h3 y1b5 ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        #segunda assinatura so do cliente

        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y205 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'visualizou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h3 y206 ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y208 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'assinou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h3 y209 ff3 fs1 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc


        #assinatura RESSARCE

        ass1 = f'{data_final} Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y257 ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc
        ass1 = f'{data_final} Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 x3 h13 y25b ff2 fs6 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc
    
        #contratante
        
        contratante = f'{self.pegar_nome(nome)}                               Assinado digitalmente por {self.pegar_nome(nome)}'
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x9 h10 y139 ff3 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante}'")
    
        #Ressarce
        
        contratante2 = f'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x9 h10 y140 ff3 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante2}'")
    
        #Contratante
        
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x9 h10 y19c ff3 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante}'")
    
        #Contratamte
        
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x9 h10 y1ed ff3 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante}'")

        #Ressarce

        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x9 h10 y244 ff3 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante2}'")
    def pegar_nome(self,nome:str):

        lista = nome.split(' ')

        if len(lista) == 1:

            return lista[0]
        elif len(lista[1])  <=2:

            return lista[0]+' '+lista[1]+' '+lista[2]

        return lista[0]+' '+lista[1]
    def edit_doc_cliente(self,nome:str,email:str,cpf:str,ip:str,local:str,hashcode:str,cidade:str,estado:str):


        self.driver.get('file:///'+self.path_html3())


        text_hash = f'{hashcode}. Acesse o'
        
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h7 y2f ff4 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{text_hash}'") #hashcode

        espaco = ' '*len(hashcode)
        hashfinal = espaco+hashcode
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xa h3 y18 ff2 fs0 fc0 sc0 ls0 ws0'); b[0].innerText = '{hashfinal}'") #hashcode


        data = datetime.now()
        data_final = f'{data.day}/{data.month}/{data.year} {data.hour}:{data.minute}'


        ass1 = f'{data_final} Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y1e ff4 fs3 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc
        ass1 = f'{data_final} Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y21 ff4 fs3 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc
        ass1 = f'{data_final} Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y25 ff4 fs3 fc0 sc0 ls0 ws0'); b[0].innerText = '{ass1}'") #modificar a data do doc

        #assinatura do cliente

        name = self.pegar_nome(nome)
        
        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y28 ff4 fs3 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'visualizou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y29 ff2 fs2 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'{data_final} {name} (E-mail:{email},CPF : {cpf})'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y2b ff4 fs3 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc

        client = f'assinou este documento por meio do IP {ip} localizado em {cidade} - {estado} - Brazil'
        self.driver.execute_script(f"var b = document.getElementsByClassName('t m0 xb h5 y2c ff2 fs2 fc0 sc0 ls0 ws0'); b[0].innerText = '{client}'") #modificar a data do doc


        #contratante
        
        contratante = f'{self.pegar_nome(nome)}                               Assinado digitalmente por {self.pegar_nome(nome)}'
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h3 y7 ff2 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante}'")
    
        #Ressarce
        
        contratante2 = f'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        self.driver.execute_script(f"var a = document.getElementsByClassName('t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws0'); a[0].innerText = '{contratante2}'")
    



        text_pdf = str(self.driver.page_source)

        open('edited3.html','w',encoding='utf8').write(text_pdf)

        os.system('node index3.js')

        file_reader = open('doccliente.pdf','rb').read()

        if platform.system() == "Linux":

            open(os.getcwd()+f'/pdfs/{hashcode}.pdf','wb').write(file_reader)
        else:
            open(os.getcwd()+f'\\pdfs\\{hashcode}.pdf','wb').write(file_reader)

#Doc().edit_html('wqdadaw','123213213213','luiz felipe','12343242','exemplo.gmail.com','34997625653','Alemar rodrigues da cunha','342','Tiao coco','Patos de minas','Minas gerias','wadawdwa',45,'adaw',42343,'efs',34,'23423','sefsefse','24234234','Patos de minas')