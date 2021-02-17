const puppeteer = require('puppeteer')



async function start(){

    let browser = await puppeteer.launch({args:['--no-sandbox']})

    return browser

}

async function modify_html(nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,porcent,estenso,porcent2,estenso2,porcent3,estenso3,numero_empresa,ip,loc,hashcode){

    let browser = await start()

    let page = await browser.newPage()
    await page.goto('file://'+__dirname+'/html/docbase.html')

    
    
    
    
    await page.evaluate((nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep)=>{
        
        document.getElementsByClassName('t m0 x7 h5 y1d ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = nome_empresa //nome empres
        document.getElementsByClassName('t m0 x7 h5 y20 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = cnpj //cnpj
        document.getElementsByClassName('t m0 x7 h3 y23 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText = nome  //nome do dono da empresa
        document.getElementsByClassName('t m0 x7 h3 y26 ff2 fs1 fc0 sc0 ls0 ws0')[0].innerText = cpf  //cpf
        document.getElementsByClassName('t m0 x7 h5 y29 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = email  //email
        document.getElementsByClassName('t m0 x7 h5 y2c ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = phone  //phone
        document.getElementsByClassName('t m0 x7 h5 y2f ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = rua  //rua
        document.getElementsByClassName('t m0 x7 h5 y32 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = numero  //numero empresa
        document.getElementsByClassName('t m0 x7 h5 y35 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = bairro  //bairro
        document.getElementsByClassName('t m0 x7 h5 y38 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = cidade  //cidade
        document.getElementsByClassName('t m0 x7 h5 y3b ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = estado  //estado
        document.getElementsByClassName('t m0 x7 h5 y3e ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = cep  //cep
        
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
        
        
        
        document.getElementsByClassName('t m0 x3 h5 y173 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
        document.getElementsByClassName('t m0 x3 h5 y174 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
        document.getElementsByClassName('t m0 x3 h5 y175 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
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
        
        
        
        document.getElementsByClassName('t m0 x3 h5 y7f ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
        document.getElementsByClassName('t m0 x3 h5 y80 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
        document.getElementsByClassName('t m0 x3 h5 y81 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
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
        
        
        
        document.getElementsByClassName('t m0 x1b h5 y1cf ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line
        document.getElementsByClassName('t m0 x1b h5 y1d0 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line2
        document.getElementsByClassName('t m0 x1b h5 y1d1 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText =line3
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
        
        
        
        let hashfinal = ' '.repeat(hashcode.length-2)+hashcode
        document.getElementsByClassName('t m0 x12 h11 y152 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        document.getElementsByClassName('t m0 x12 h11 y1b2 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        document.getElementsByClassName('t m0 x12 h11 y201 ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        document.getElementsByClassName('t m0 x12 h11 y25a ff3 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode
        
        text_hash = 'autenticidade digitando o HASH '+hashcode
        
        let rodape = document.getElementsByClassName('t m0 x6 h7 y19 ff5 fs4 fc0 sc0 ls0 ws0') //hashs rodapes

        for(let i =0;i<rodape.length;i++){

            rodape[i].innerHTML = text_hash

        }
         
        // data atual para inserir no documento
        
        let data = new Date()
        
        
        let data_final = data.getDay().toString()+'/'+data.getMonth().toString()+'/'+data.getFullYear().toString()+' '+data.getHours().toString()+':'+data.getSeconds().toString()
        

        //assinatura ressarce

        let ass1 = data_final+' Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
        document.getElementsByClassName('t m0 x3 h13 y158 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y15b ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y15e ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        
        //assinatura do cliente
        
        let name = pegar_nome(nome)
        
        let client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y161 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h5 y162 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y164 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h5 y165 ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        
        //assinatura so do cliente
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y1ba ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h5 y1bb ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y1bd ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h5 y1be ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        //segunda assinatura so do cliente
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y209 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'visualizou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h5 y20a ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 x3 h13 y20c ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        client = 'assinou este documento por meio do IP '+ip+' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 x3 h5 y20d ff3 fs1 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc
        
        
        //assinatura RESSARCE
        
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y262 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 x3 h13 y265 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        
        //contratante
        
        let contratante = pegar_nome(nome)+'                               Assinado digitalmente por '+pegar_nome(nome)
        document.getElementsByClassName('t m0 xa h13 y13f ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante
        contratante = cpf+'                               '+data_final
        document.getElementsByClassName('t m0 xa h13 y140 ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        //Ressarce
        
        let contratante2 = 'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        document.getElementsByClassName('t m0 xa h13 y147 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        contratante2 = '068.243.889-80                               '+data_final
        document.getElementsByClassName('t m0 xa h13 y148 ff3 fs4 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        
        //Contratante
        
        contratante = pegar_nome(nome)+'                               Assinado digitalmente por '+pegar_nome(nome)
        document.getElementsByClassName('t m0 xa h13 y1a4 ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante
        contratante = cpf+'                     '+data_final
        document.getElementsByClassName('t m0 xa h11 y1a5 ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        //Contratamte
        
        contratante = pegar_nome(nome)+'                               Assinado digitalmente por '+pegar_nome(nome)
        document.getElementsByClassName('t m0 xa h13 y1e4 ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante
        contratante = cpf+'                     '+data_final
        document.getElementsByClassName('t m0 xa h11 y1e5 ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        
        
        //Ressarce
        
        contratante2 = 'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        document.getElementsByClassName('t m0 xa h13 y23a ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        contratante2 = '068.243.889-80                             '+data_final
        document.getElementsByClassName('t m0 xa h11 y23b ff3 fs5 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        
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
        
        
    
        let hashfinal = ' '.repeat(hashcode.length-2)+hashcode
        document.getElementsByClassName('t m0 xa h3 y1a ff2 fs0 fc0 sc0 ls0 ws0')[0].innerText = hashfinal //hashcode


        let data = new Date()
        
        
        let data_final = data.getDay().toString()+'/'+data.getMonth().toString()+'/'+data.getFullYear().toString()+' '+data.getHours().toString()+':'+data.getSeconds().toString()

        let ass1 = data_final+' Willian Rafael Barreto Lohn criou este documento.(E-mail:willian.r.lohn@gmail.com, '
        document.getElementsByClassName('t m0 xb h6 y20 ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:@willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 xb h6 y23 ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Willian Rafael Barreto Lohn (E-mail:willian.r.lohn@gmail.com,CPF : 068.243.889-80) '
        document.getElementsByClassName('t m0 xb h6 y27 ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc

        //assinatura do cliente

        let name = pegar_nome(nome)
        
        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 xb h6 y2a ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = 'visualizou este documento por meio do IP {ip} localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 xb h6 y2b ff2 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = data_final+' '+name+' (E-mail:'+email+',CPF : '+cpf+')'
        document.getElementsByClassName('t m0 xb h6 y2d ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc

        client = 'assinou este documento por meio do IP '+ip+ ' localizado em '+cidade+' - '+estado+' - Brazil'
        document.getElementsByClassName('t m0 xb h6 y2e ff2 fs4 fc0 sc0 ls0 ws0')[0].innerText = client //modificar a data do doc


        //contratante
        
        let contratante = pegar_nome(nome)+'                               Assinado digitalmente por '+pegar_nome(nome)
        document.getElementsByClassName('t m0 x3 h5 y7 ff2 fs2 fc0 sc0 ls0 ws0')[0].innerText = contratante
        contratante = cpf+'                               '+data_final
        document.getElementsByClassName('t m0 x3 h3 y8 ff2 fs2 fc0 sc0 ls0 ws0')[0].innerText = contratante
        
        //Ressarce
        
        let contratante2 = 'Willian Rafael                             Assinado digitalmente por Willian Rafael'
        document.getElementsByClassName('t m0 x3 h5 yf ff2 fs2 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        contratante2 = '068.243.889-80                               '+data_final
        document.getElementsByClassName('t m0 x3 h3 y10 ff2 fs2 fc0 sc0 ls0 ws0')[0].innerText = contratante2
        

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



//modify_html('wwadwadaw','jfflffkfj','wdawdawdwa','wdadadaw','wadawdda','wdwadwa','wdwadwad','awdawdwa','wdwadawdwa','adwadwad','wadwadwa','wadwadaw','wadwadwadwa','wadawdaw','wdwadaw','adawda','dwawa','awdawdwa','awdawdawd','4324234','wdwada','wadwadwadwa')


module.exports = {modify_html,modify_html_another}