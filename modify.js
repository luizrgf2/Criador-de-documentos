const puppeteer = require('puppeteer')



async function start(){

    let browser = await puppeteer.launch({args:['--no-sandbox']})

    return browser

}
function text_nome_cnpj(name,cnpj){

let line = 'Declaramos para  os  devidos  fins, como administrador  e  responsável legal  da  empresa '+name
let line2 = ' inscrita(o)  no  CNPJ  sob  o  nº  '+cnpj+',  que  as  informações  relativas  ao  período  de  análise ' 
let line3 = 'operacional.'
let tamanho_line = line.length



if (tamanho_line > 129){
    line2 = line.substring(129,tamanho_line)+ line2
    line = line.substring(0,129)
}
let tamanho_line2 = line2.length
if (tamanho_line2 > 122){
    line3 = line2.substring(122,tamanho_line2)+ line3
    line2 = line2.substring(0,122)
}



document.getElementsByClassName('t m0 x3 h3 y16d ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText =line
document.getElementsByClassName('t m0 x3 h3 y16e ff2 fs1 fc0 sc0 ls0 ws0'); a[0].innerText =line2
document.getElementsByClassName('t m0 x3 h5 y16f ff3 fs1 fc0 sc0 ls0 ws0'); a[0].innerText =line3
}
function text_porcentagem(porcent,estenso,porcent2,estenso2,porcent3,estenso3){

    let line = 'percentual  de '+porcent+'%  ('+estenso+' por  cento)  sobre  o  valor  recuperado  que  tenha  sido  fornecido  em  crédito  tributário  ou '
    let line2 = 'espécie,  sendo  '+porcent2+'%  ('+estenso2+' por  cento)  referente  ao  custo  técnico  e  {porcent3}%  ({estenso3}  por  cento)  referente  ao  custo ' 
    let line3 = 'operacional.'
    let tamanho_line = line.length



    if (tamanho_line > 129){
        line2 = line.substring(129,tamanho_line)+ line2
        line = line.substring(0,129)
    }

    let tamanho_line2 = line2.length
    if (tamanho_line2 > 122){
        line3 = line2.substring(122,tamanho_line2)+ line3
        line2 = line2.substring(0,122)
    }


                                                                            
    document.getElementsByClassName('t m0 x3 h5 y7c ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
    document.getElementsByClassName('t m0 x3 h5 y7d ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
    document.getElementsByClassName('t m0 x3 h5 y7e ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
}
function text_todos(name,cnpj,nome_empresa,numero_empresa,rua,nome,cpf,bairro,cidade,phone,estado,cep){

    let line = nome_empresa+', CNPJ n.º '+cnpj+', sita a '+rua+', nº '+numero_empresa+', '+bairro+', '
    let line2 = cidade+',  '+estado+',  CEP  '+cep+',  telefone  '+phone+',  neste  ato  representada  por ' 
    let line3 = nome+',  identificado  por  CPF/RG  '+cpf+',  com  poderes  para  assinar  procuração, '
    let tamanho_line = line.length



    if (tamanho_line > 98){
        line2 = line.substring(129,tamanho_line)+ line2
        line = line.substring(0,129)
    }
    tamanho_line2 = line2.length
    if (tamanho_line2 > 111){
        line3 = line2.substring(122,tamanho_line2)+ line3
        line2 = line2.substring(0,122)
}



document.getElementsByClassName('t m0 x1a h3 y1c4 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
document.getElementsByClassName('t m0 x1a h5 y1c5 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
document.getElementsByClassName('t m0 x1a h3 y1c6 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
}
function assinar(nome,cpf,ip,loc,hashcode,email,cidade,estado){
    
    let hashfinal = ' '.repeat(hashcode.length)+hashcode
    document.getElementsByClassName('t m0 x10 h10 y14a ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
    document.getElementsByClassName('t m0 x18 h12 y1a9 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
    document.getElementsByClassName('t m0 x18 h12 y1fd ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
    document.getElementsByClassName('t m0 x18 h12 y24f ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode

    text_hash = hashcode+'. Acesse o'

    document.getElementsByClassName('t m0 x3 h12 y161 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode
    document.getElementsByClassName('t m0 x3 h12 y1b8 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash//hashcode
    document.getElementsByClassName('t m0 x3 h12 y1b8 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode
    document.getElementsByClassName('t m0 x3 h12 y25f ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode

    let data = new Date()

    
    let data_final = data.getDay().toString()+'/'+data.getMonth().toString()+'/'+data.getFullYear().toString()+' '+data.getHours().toString()+':'+data.getSeconds().toString()

    let ass1 = data_final+' Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
    document.getElementsByClassName('t m0 x3 h13 y150 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
    ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
    document.getElementsByClassName('t m0 x3 h13 y153 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
    ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
    document.getElementsByClassName('t m0 x3 h13 y157 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc

    //assinatura do cliente

    let name = pegar_nome(nome)

    let client = data_final+' '+name+' (E-mail:{email},CPF : {cpf})'
    document.getElementsByClassName('t m0 x3 h13 y15a ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
 document.getElementsByClassName('t m0 x3 h3 y15b ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = data_final+' {name} (E-mail:{email},CPF : {cpf})'
    document.getElementsByClassName('t m0 x3 h13 y15d ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
 document.getElementsByClassName('t m0 x3 h3 y15e ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc


    //assinatura so do cliente

    client = data_final+' {name} (E-mail:{email},CPF : {cpf})'
    document.getElementsByClassName('t m0 x3 h13 y1b1 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
 document.getElementsByClassName('t m0 x3 h3 y1b2 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = data_final+' {name} (E-mail:{email},CPF : {cpf})'
    document.getElementsByClassName('t m0 x3 h13 y1b4 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
 document.getElementsByClassName('t m0 x3 h3 y1b5 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    //segunda assinatura so do cliente

    client = data_final+' {name} (E-mail:{email},CPF : {cpf})'
    document.getElementsByClassName('t m0 x3 h13 y205 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
 document.getElementsByClassName('t m0 x3 h3 y206 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = data_final+' {name} (E-mail:{email},CPF : {cpf})'
    document.getElementsByClassName('t m0 x3 h13 y208 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

    client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
 document.getElementsByClassName('t m0 x3 h3 y209 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc


    //assinatura RESSARCE

    ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
    document.getElementsByClassName('t m0 x3 h13 y257 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
    ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
    document.getElementsByClassName('t m0 x3 h13 y25b ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc

    //contratante

    let contratante = pegar_nome(nome)+'                               Assinado digitalmente por {pegar_nome(nome)}'
    document.getElementsByClassName('t m0 x9 h10 y139 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante

    //Ressarce

    let contratante2 = 'Willian Rafael                             Assinado digitalmente por Willian Rafael'
    document.getElementsByClassName('t m0 x9 h10 y140 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante2

    //Contratante

    document.getElementsByClassName('t m0 x9 h10 y19c ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante

    //Contratamte

    document.getElementsByClassName('t m0 x9 h10 y1ed ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante

    //Ressarce

    document.getElementsByClassName('t m0 x9 h10 y244 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante2


}

async function modify_html(nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,porcent,estenso,porcent2,estenso2,porcent3,estenso3,numero_empresa,ip,loc,hashcode){

    let browser = await start()

    let page = await browser.newPage()
    await page.goto('file://'+__dirname+'/html/docbase.html')

    
    
    
    
    await page.evaluate((nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep)=>{
        
        document.getElementsByClassName('t m0 x5 h5 y1c ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = nome_empresa //nome empres
        document.getElementsByClassName('t m0 x5 h5 y1f ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = cnpj //cnpj
        document.getElementsByClassName('t m0 x5 h3 y22 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText = nome  //nome do dono da empresa
        document.getElementsByClassName('t m0 x5 h3 y25 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText = cpf  //cpf
        document.getElementsByClassName('t m0 x5 h5 y28 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = email  //email
        document.getElementsByClassName('t m0 x5 h5 y2b ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = phone  //phone
        document.getElementsByClassName('t m0 x5 h5 y2e ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = rua  //rua
        document.getElementsByClassName('t m0 x5 h5 y31 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = numero  //numero empresa
        document.getElementsByClassName('t m0 x5 h5 y34 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = bairro  //bairro
        document.getElementsByClassName('t m0 x5 h5 y37 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = cidade  //cidade
        document.getElementsByClassName('t m0 x5 h5 y3a ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = estado  //estado
        document.getElementsByClassName('t m0 x5 h5 y3d ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = cep  //cep
        
    },nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep)
    
    
    await page.evaluate((cnpj,nome)=>{
        let line = 'Declaramos para  os  devidos  fins, como administrador  e  responsável legal  da  empresa '+nome
        let line2 = 'inscrita(o)  no  CNPJ  sob  o  nº  '+cnpj+',  que  as  informações  relativas  ao  período  de  análise' 
        let line3 = 'operacional.'
        let tamanho_line = line.length
        
        
        
        if (tamanho_line > 129){
            line2 = line.substring(129,tamanho_line)+ line2
            line = line.substring(0,129)
        }
        let tamanho_line2 = line2.length
        if (tamanho_line2 > 122){
            line3 = line2.substring(122,tamanho_line2)+ line3
            line2 = line2.substring(0,122)
        }
        
        
        
        document.getElementsByClassName('t m0 x3 h3 y16d ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
        document.getElementsByClassName('t m0 x3 h3 y16e ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
        document.getElementsByClassName('t m0 x3 h5 y16f ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
    },cnpj,nome)
    
    await page.evaluate((porcent,estenso,porcent2,estenso2,porcent3,estenso3)=>{
        
        let line = 'percentual  de '+porcent+'%  ('+estenso+' por  cento)  sobre  o  valor  recuperado  que  tenha  sido  fornecido  em  crédito  tributário  ou '
        let line2 = 'espécie,  sendo  '+porcent2+'%  ('+estenso2+' por  cento)  referente  ao  custo  técnico  e  '+porcent3+'%  ('+estenso3+' por  cento)  referente  ao  custo ' 
        let line3 = 'operacional.'
        let tamanho_line = line.length
        
        
        
        if (tamanho_line > 129){
            line2 = line.substring(129,tamanho_line)+ line2
            line = line.substring(0,129)
        }
        
        let tamanho_line2 = line2.length
        if (tamanho_line2 > 122){
            line3 = line2.substring(122,tamanho_line2)+ line3
            line2 = line2.substring(0,122)
        }
        
        
        
        document.getElementsByClassName('t m0 x3 h5 y7c ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
        document.getElementsByClassName('t m0 x3 h5 y7d ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
        document.getElementsByClassName('t m0 x3 h5 y7e ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
    },porcent,estenso,porcent2,estenso2,porcent3,estenso3)
    
    await page.evaluate((name,cnpj,nome_empresa,numero_empresa,rua,nome,cpf,bairro,cidade,phone,estado,cep)=>{
        let line = nome_empresa+', CNPJ n.º '+cnpj+', sita a '+rua+', nº '+numero_empresa+', '+bairro+', '
        let line2 = cidade+',  '+estado+',  CEP  '+cep+',  telefone  '+phone+',  neste  ato  representada  por ' 
        let line3 = nome+',  identificado  por  CPF/RG  '+cpf+',  com  poderes  para  assinar  procuração, '
        let tamanho_line = line.length
        
        
        
        if (tamanho_line > 98){
            line2 = line.substring(129,tamanho_line)+ line2
            line = line.substring(0,129)
        }
        tamanho_line2 = line2.length
        if (tamanho_line2 > 111){
            line3 = line2.substring(122,tamanho_line2)+ line3
            line2 = line2.substring(0,122)
        }
        
        
        
        document.getElementsByClassName('t m0 x1a h3 y1c4 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
        document.getElementsByClassName('t m0 x1a h5 y1c5 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
        document.getElementsByClassName('t m0 x1a h3 y1c6 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
    },nome,cnpj,nome_empresa,numero_empresa,rua,nome,cpf,bairro,cidade,phone,estado,cep)
    
    await page.evaluate((nome,cpf,ip,loc,hashcode,email,cidade,estado)=>{
        
        
        let pegar_nome = nome=>{
            
            lista = nome.split(' ')
            
            if(lista.length == 1){
                
                return lista[0]
            }
            else if(lista[1].length  <=2){
                
                return lista[0]+' '+lista[1]+' '+lista[2]
                
                
                
                
            }
            return lista[0]+' '+lista[1]
            
        }
        
        
        
        let hashfinal = ' '.repeat(hashcode.length-5)+hashcode
        document.getElementsByClassName('t m0 x10 h10 y14a ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        document.getElementsByClassName('t m0 x18 h12 y1a9 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        document.getElementsByClassName('t m0 x18 h12 y1fd ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        document.getElementsByClassName('t m0 x18 h12 y24f ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        
        text_hash = hashcode+'. Acesse o'
        
        document.getElementsByClassName('t m0 x3 h12 y161 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode
        document.getElementsByClassName('t m0 x3 h12 y1b8 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash//hashcode
        document.getElementsByClassName('t m0 x3 h12 y1b8 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode
        document.getElementsByClassName('t m0 x3 h12 y25f ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode
        
        let data = new Date()
        
        
        let data_final = data.getDay().toString()+'/'+data.getMonth().toString()+'/'+data.getFullYear().toString()+' '+data.getHours().toString()+':'+data.getSeconds().toString()
        
        let ass1 = data_final+' Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
        document.getElementsByClassName('t m0 x3 h13 y150 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y153 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y157 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        
        //assinatura do cliente
        
        let name = pegar_nome(nome)
        
        let client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y15a ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h3 y15b ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y15d ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h3 y15e ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        
        //assinatura so do cliente
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y1b1 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h3 y1b2 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y1b4 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h3 y1b5 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        //segunda assinatura so do cliente
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y205 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h3 y206 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y208 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h3 y209 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        
        //assinatura RESSARCE
        
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y257 ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y25b ff2 fs6 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        
        //contratante
        
        let contratante = pegar_nome(nome)+'                               Assinado digitalmente por '+pegar_nome(nome)
        document.getElementsByClassName('t m0 x9 h10 y139 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        //Ressarce
        
        let contratante2 = 'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        document.getElementsByClassName('t m0 x9 h10 y140 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        
        //Contratante
        
        document.getElementsByClassName('t m0 x9 h10 y19c ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        //Contratamte
        
        document.getElementsByClassName('t m0 x9 h10 y1ed ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        //Ressarce
        
        document.getElementsByClassName('t m0 x9 h10 y244 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        
    },nome,cpf,ip,loc,hashcode,email,cidade,estado)
    
    await page.pdf({ path: 'contrato.pdf', format: 'A4' });
    
    await page.goto('file://'+__dirname+'/html/Doccliente.html')

    await page.evaluate((nome,email,cpf,ip,local,hashcode,cidade,estado)=>{
        
        let pegar_nome = nome=>{
            
            lista = nome.split(' ')
            
            if(lista.length == 1){
                
                return lista[0]
            }
            else if(lista[1].length  <=2){
                
                return lista[0]+' '+lista[1]+' '+lista[2]
                
                
                
                
            }
            return lista[0]+' '+lista[1]
            
        }
        
        
        let text_hash = hashcode+'. Acesse o'
        
        document.getElementsByClassName('t m0 xb h7 y2f ff4 fs0 fc0 sc0 ls0 ws0')[0].innerText = text_hash //hashcode

        let hashfinal = ' '.repeat(hashcode.length-5)+hashcode
        document.getElementsByClassName('t m0 xa h3 y18 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode


        let data = new Date()
        
        
        let data_final = data.getDay().toString()+'/'+data.getMonth().toString()+'/'+data.getFullYear().toString()+' '+data.getHours().toString()+':'+data.getSeconds().toString()

        let ass1 = data_final+' Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
        document.getElementsByClassName('t m0 xb h5 y1e ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 xb h5 y21 ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 xb h5 y25 ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc

        //assinatura do cliente

        let name = pegar_nome(nome)
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 xb h5 y28 ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = 'visualizou este documento por meio do IP {ip} localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 xb h5 y29 ff2 fs2 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 xb h5 y2b ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = 'assinou este documento por meio do IP '+ip+ ' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 xb h5 y2c ff2 fs2 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc


        //contratante
        
        let contratante = name+'                               Assinado digitalmente por '+name
        document.getElementsByClassName('t m0 x3 h3 y7 ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante
    
        //Ressarce
        
        let contratante2 = 'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        document.getElementsByClassName('t m0 x3 h3 ye ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = contratante2
    

    },nome,email,cpf,ip,loc,hashcode,cidade,estado)
    
    
    await page.pdf({path:'./pdfs/'+hashcode+'.pdf',format:'a4'})


    
    browser.close()
}

async function modify_html_another(cnpj,nome_empresa,numero_empresa,rua,nome,cpf,bairro,cidade,phone,estado,cep,email){
    
    let browser = await start()

    let page = await browser.newPage()
    await page.goto('file://'+__dirname+'/html/docbase2.html')


    await page.evaluate((cnpj,nome_empresa,numero_empresa,rua,nome,cpf,bairro,cidade,phone,estado,cep,email)=>{
        document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = nome //nome
        document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0')[4].innerText = estado //estado
        document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0')[3].innerText = bairro //bairro
        document.getElementsByClassName('t m0 xb h5 y15 ff3 fs3 fc0 sc0 ls3 ws0')[0].innerText = '       '+cnpj//cnpj
        document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0')[1].innerText = email  //email
        document.getElementsByClassName('t m0 xc h6 y15 ff4 fs3 fc0 sc0 ls0 ws0')[2].innerText = phone //phone
        document.getElementsByClassName('t m0 xc h6 y1c ff4 fs3 fc0 sc0 ls0 ws0')[0].innerText = rua //rua
        document.getElementsByClassName('t m0 xb h6 y15 ff4 fs3 fc0 sc0 ls3 ws0')[0].innerText = '        '+numero_empresa//numero
        document.getElementsByClassName('t m0 xb h6 y1c ff4 fs3 fc0 sc0 ls3 ws0')[0].innerText = '        '+cidade//cidade
        document.getElementsByClassName('t m0 xb h6 y15 ff4 fs3 fc0 sc0 ls3 ws0')[1].innerText = '        '+cep//cep
    },cnpj,nome_empresa,numero_empresa,rua,nome,cpf,bairro,cidade,phone,estado,cep,email)

    await page.pdf({path:'franquia.pdf',format:'a4'})
}


module.exports = {modify_html,modify_html_another}