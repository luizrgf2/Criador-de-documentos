const puppeteer = require('puppeteer')
const data_time = require('date-and-time')
const fs = require('fs')


async function start(){

    let browser = await puppeteer.launch({args:['--no-sandbox']})

    return browser

}

async function modify_html(nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,porcent,estenso,porcent2,estenso2,porcent3,estenso3,numero_empresa,ip,loc,hashcode){
    let browser = await start()
    
    let page = await browser.newPage()

    let pegar_nome = nome=>{ //pegar o primeiro e segundo nome
        
        lista = nome.split(' ')
        
        if(lista.length == 1){
            
            return lista[0]
        }
        else if(lista[1].length  <=2){
            
            return lista[0]+' '+lista[1]+' '+lista[2]
            
            
            
            
        }
        return lista[0]+' '+lista[1]
        
    }
    
    const now = new Date()
    
    let data = now.toLocaleDateString('pt-BR',{timeZone:'America/Sao_Paulo'})
    let hora = now.toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo',hour12:false})
    
    let data_final  = data+' '+hora.split(':')[0]+':'+hora.split(':')[1]
    
    //pega o texto do html do documento do cliente
    const paginhtml_cliente = fs.readFileSync('./html/docbase.html',{encoding: 'utf8'}) //pagndo o texto do documento html documento do cliente

    //modifica os dados do texto do html
    var texto_final = paginhtml_cliente.replace('[NOMEEMPRESA]',nome_empresa).replace('[CNPJ]',cnpj).replace('[NOME]',nome).replace('[CPF]',cpf).replace('[EMAIL]',email).replace('[PHONE]',phone).replace('[RUA]',rua).replace('[NUMERO]',numero).replace('[BAIRRO]',bairro).replace('[CIDADE]',cidade).replace('[ESTADO]',estado).replace('[CEP]',cep).replace('[DATA]',data_final).replace('[HASHCODE]',hashcode).replace('[IP]',ip).replace('[NOMESOBRENOME]',pegar_nome(nome)).replace('[NUM1]',porcent).replace('[NUM2]',porcent2).replace('[NUM3]',porcent3)
    
    for(let i =0; i<50;i++){ //modifica todos os dados

        var texto_final = texto_final.replace('[NOMEEMPRESA]',nome_empresa).replace('[CNPJ]',cnpj).replace('[NOME]',nome).replace('[CPF]',cpf).replace('[EMAIL]',email).replace('[PHONE]',phone).replace('[RUA]',rua).replace('[NUMERO]',numero).replace('[BAIRRO]',bairro).replace('[CIDADE]',cidade).replace('[ESTADO]',estado).replace('[CEP]',cep).replace('[DATA]',data_final).replace('[HASHCODE]',hashcode).replace('[IP]',ip).replace('[NOMESOBRENOME]',pegar_nome(nome)).replace('[NUM1]',porcent).replace('[NUM2]',porcent2).replace('[NUM3]',porcent3)
        
    }

    fs.writeFileSync('./edited.html',texto_final,{encoding: 'utf8'});


    
    await page.goto('file://'+__dirname+'/edited.html')
    
    
    await page.pdf({ path: './contrato.pdf', format: 'A4' });
    console.log('adwa')
    
    await page.waitForTimeout(2000)

    await page.goto('file://'+__dirname+'/html/Doccliente.html')

    await page.evaluate((nome,email,cpf,ip,local,hashcode,cidade,estado,data_final)=>{
        
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


        let ass1 = data_final+' Ressarce criou este documento.(E-mail:contato@ressarce.com.br, '
        document.getElementsByClassName('t m0 xb h6 y20 ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Ressarce (E-mail:@contato@ressarce.com.br,CNPJ : 38.053.265/0001-20) '
        document.getElementsByClassName('t m0 xb h6 y23 ff4 fs2 fc0 sc0 ls0 ws0')[0].innerText = ass1 //modificar a data do doc
        ass1 = data_final+' Ressarce (E-mail:contato@ressarce.com.br,CNPJ : 38.053.265/0001-20) '
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


      

    },nome,email,cpf,ip,loc,hashcode,cidade,estado,data_final)
    
    
    await page.pdf({path:'./pdfs/'+hashcode+'.pdf',format:'a4'})
    
    await browser.close()
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

    await browser.close()
}

async function modify_html_relatorio(nome_empresa,cnpj,valor1,valor2){

    let browser = await start()

    let page = await browser.newPage()
    await page.goto('file://'+__dirname+'/html/relatorio.html')


    await page.evaluate( (nome_empresa,cnpj,valor_inicio,valor_final)=>
    {

        document.getElementsByClassName('t m0 xb h4 y29 ff3 fs2 fc0 sc0 ls0 ws0')[0].innerHTML = nome_empresa
        cnpj_text = 'CNPJ '+cnpj
        document.getElementsByClassName('t m0 xb h4 y2b ff3 fs2 fc0 sc0 ls0 ws0')[0].innerHTML = cnpj_text
        text_values = 'Aproximadamente R$ '+valor_inicio+' mil reais a R$ '+valor_final+' mil reais'
        document.getElementsByClassName('t m0 x11 h6 y2f ff2 fs2 fc0 sc0 ls0 ws0')[0].innerHTML = text_values


    },nome_empresa,cnpj,valor1,valor2)
    await page.pdf({format:'A4',path:'relatorio.pdf'})
    await browser.close()

}

async function modify_contrato_franqueado(cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,ip,loc,hashcode){
    
    const now = new Date()
    
    let data = now.toLocaleDateString('pt-BR',{timeZone:'America/Sao_Paulo'})
    let hora = now.toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo',hour12:false})
    
    let data_final  = data+' '+hora.split(':')[0]+':'+hora.split(':')[1]
    
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
    
    var documento = fs.readFileSync('./html/contratofranqueado.html','utf-8')
    
    let edit_text_from_file = documento.replace('[NOME]',nome).
    replace('[CPF]',cpf).
    replace('[EMAIL]',email).
    replace('[RUA]',rua).
    replace('[PHONE]',phone).
    replace('[NUMERO]',numero).
    replace('[BAIRRO]',bairro).
    replace('[CIDADE]',cidade).
    replace('[ESTADO]',estado).
    replace('[CEP]',cep).
    replace('[HASHCODE]',hashcode).
    replace('[NOME SOBRENOME]',pegar_nome(nome)).
    replace('[DATA ATUAL]',data_final).
    replace('[IP]',ip)
    
    
    
    for(let i =0; i<60;i++){
        edit_text_from_file = edit_text_from_file.
        replace('[NOME]',nome).
        replace('[CPF]',cpf).
        replace('[EMAIL]',email).
        replace('[RUA]',rua).
        replace('[PHONE]',phone).
        replace('[NUMERO]',numero).
        replace('[BAIRRO]',bairro).
        replace('[CIDADE]',cidade).
        replace('[ESTADO]',estado).
        replace('[CEP]',cep).
        replace('[HASHCODE]',hashcode).
        replace('[NOMESOBRENOME]',pegar_nome(nome)).
        replace('[DATA]',data_final).
        replace('[IP]',ip)
    }
    
    
    
    
    
    
    
    
    
    
    
    
    fs.writeFileSync('./editedf.html',edit_text_from_file,{encoding:'utf-8'})
    
    
    let browser = await start()
    
    let page = await browser.newPage()
    await page.goto('file://'+__dirname+'/editedf.html')
    
    
    documento = fs.readFileSync('./html/clientfranqueado.html','utf-8')
    
    
    let edited_text_from_clientefranqueado = documento.
    replace('[DATA]',data_final).
    replace('[NOMESOBRENOME]',pegar_nome(nome)).
    replace('[CPF]',cpf).
    replace('[HASHCODE]',hashcode).
    replace('[EMAIL]',email).
    replace('[IP]',ip).
    replace('[CIDADE]',cidade).
    replace('[ESTADO]',estado)
    
    for(let i =0; i<10;i++){
        edited_text_from_clientefranqueado = edited_text_from_clientefranqueado.
        replace('[DATA]',data_final).
        replace('[NOMESOBRENOME]',pegar_nome(nome)).
        replace('[CPF]',cpf).
        replace('[HASHCODE]',hashcode).
        replace('[EMAIL]',email).
        replace('[IP]',ip).
        replace('[CIDADE]',cidade).
        replace('[ESTADO]',estado)
    }
    
    
    fs.writeFileSync('./editedf.html',edited_text_from_clientefranqueado,{encoding:'utf-8'})
    
    await page.reload()

    await page.pdf({format:'a4',path:'./pdfs/'+hashcode+'.pdf'})

    browser.close()
    
}

//modify_html('wwadwadaw','jfflffkfj','wdawdawdwa','wdadadaw','wadawdda','wdwadwa','wdwadwad','awdawdwa','wdwadawdwa','adwadwad','wadwadwa','wadwadaw','wadwadwadwa','wadawdaw','wdwadaw','adawda','dwawa','awdawdwa','awdawdawd','4324234','wdwada','wadwadwadwa')


//modify_contrato_franqueado('32423423432432432','luiz ricardo gonçaves','23432424243242','luizrgfellipe@gmail.com','34 323323-233223','Alemar rodrigues da cunha',455,'Sebastiao amorim','patos de minas','minas gerais','2344232344','2343214124214214','patos de minas','fdsfsdfsdw3rfgdsrtg4tgfdg54gfdgrrtgdrg345tfd')

module.exports = {modify_html,modify_html_another,modify_html_relatorio,modify_contrato_franqueado}
