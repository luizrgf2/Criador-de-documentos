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


    documento = fs.readFileSync('./html/clientcontrato.html','utf-8') // pegando texto do html de assinatura para o cliente
    

    // editando o texto do documento extraido
    
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
    

    
    fs.writeFileSync('./html/Doccliente.html',edited_text_from_clientefranqueado,{encoding:'utf-8'}) // escrevendo no html o texto editado das assinaturas do franqueado


    await page.goto('file://'+__dirname+'/html/Doccliente.html')

    
    
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

        document.getElementsByClassName('t m0 xb h4 y29 ff3 fs2 fc0 sc0 ls0 ws0')[0].innerHTML = nome_empresa // mdoficando o campo de texto do nome empresa
        cnpj_text = 'CNPJ '+cnpj
        document.getElementsByClassName('t m0 xb h4 y2b ff3 fs2 fc0 sc0 ls0 ws0')[0].innerHTML = cnpj_text // modificando campo de cnpj
        text_values = 'Aproximadamente R$ '+valor_inicio+' a R$ '+valor_final
        document.getElementsByClassName('t m0 x11 h6 y2f ff2 fs2 fc0 sc0 ls0 ws0')[0].innerHTML = text_values // modificando os valores do relátorio


    },nome_empresa,cnpj,valor1,valor2)
    await page.pdf({format:'A4',path:'relatorio.pdf'})
    await browser.close()

}

async function modify_contrato_franqueado(cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,ip,loc,hashcode){
    // data atual
    const now = new Date()
    
    let data = now.toLocaleDateString('pt-BR',{timeZone:'America/Sao_Paulo'})
    let hora = now.toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo',hour12:false})
    
    let data_final  = data+' '+hora.split(':')[0]+':'+hora.split(':')[1]
    

    

    let pegar_nome = nome=>{ // extrair nome e sobrenome do nome completo
        
        lista = nome.split(' ')
        
        if(lista.length == 1){
            
            return lista[0]
        }
        else if(lista[1].length  <=2){
            
            return lista[0]+' '+lista[1]+' '+lista[2]
            
            
            
            
        }
        return lista[0]+' '+lista[1]
        
    }
    
    var documento = fs.readFileSync('./html/contratofranqueado.html','utf-8') // pegar texto do documento html
    

    // editando os campos do texto do html extraido

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
    
    
    
    
    
    
    
    
    
    
    
    
    fs.writeFileSync('./editedf.html',edit_text_from_file,{encoding:'utf-8'}) // escrevendo documento editado no html
    
    
    let browser = await start()
    
    let page = await browser.newPage()
    await page.goto('file://'+__dirname+'/editedf.html')
    
    
    documento = fs.readFileSync('./html/clientfranqueado.html','utf-8') // pegando texto do html de assinatura para o cliente
    

    // editando o texto do documento extraido
    
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
    
    await page.pdf({format:'a4',path:'./contratofranqueado.pdf'}) // gerando pdf do documento final já assinado pelo franqueado

    
    fs.writeFileSync('./editedf.html',edited_text_from_clientefranqueado,{encoding:'utf-8'}) // escrevendo no html o texto editado das assinaturas do franqueado
    
    await page.reload()

    await page.pdf({format:'a4',path:'./pdfs/'+hashcode+'.pdf'}) // gerando o documento de assinaturas do franqueado

    browser.close()
    
}

async function modify_contrato_parceiro(nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,ip,hashcode,porcent,gerarDocCLient){

        // data atual
        const now = new Date()
    
        let data = now.toLocaleDateString('pt-BR',{timeZone:'America/Sao_Paulo'})
        let hora = now.toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo',hour12:false})
        
        let data_final  = data+' '+hora.split(':')[0]+':'+hora.split(':')[1]
        
    
        
        //pegar nom e sobrenome
        let pegar_nome = nome=>{ // extrair nome e sobrenome do nome completo
            
            lista = nome.split(' ')
            
            if(lista.length == 1){
                
                return lista[0]
            }
            else if(lista[1].length  <=2){
                
                return lista[0]+' '+lista[1]+' '+lista[2]
                
                
                
                
            }
            return lista[0]+' '+lista[1]
            
        }
        
        //lendo o doc html do parceiro
        var documento = fs.readFileSync('./html/parceirofranqueado.html','utf-8') // pegar texto do documento html
        
    
        // editando os campos do texto do html extraido
    
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
            replace('[IP]',ip).
            replace('[PORCENTO]',porcent)
        }
        
        
        
        
        
        
        
        
        
        
        //escrevendo texto modificado do html
        
        fs.writeFileSync('./editedf.html',edit_text_from_file,{encoding:'utf-8'}) // escrevendo documento editado no html
        
        //abrindo html modificado no navegador para salvar em pdf
        let browser = await start()
        
        let page = await browser.newPage()
        await page.goto('file://'+__dirname+'/editedf.html')
        
        await page.pdf({format:'a4',path:'./parceirofranqueado.pdf'}) // gerando pdf do documento final já assinado pelo franqueado
        
        //abrindo texto do documento para cleinte final
        
        documento = fs.readFileSync('./html/clientfranqueado.html','utf-8') // pegando texto do html de assinatura para o cliente
        
    
        // editando o texto do documento extraido
        
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
        
        if(gerarDocCLient == true){

            fs.writeFileSync('./editedf.html',edited_text_from_clientefranqueado,{encoding:'utf-8'}) // escrevendo no html o texto editado das assinaturas do franqueado
            
            await page.reload()
        
            await page.pdf({format:'a4',path:'./pdfs/'+hashcode+'.pdf'}) // gerando o documento de assinaturas do franqueado
        
        }
        
        browser.close()
}

//modify_html('wwadwadaw','jfflffkfj','wdawdawdwa','wdadadaw','wadawdda','wdwadwa','wdwadwad','awdawdwa','wdwadawdwa','adwadwad','wadwadwa','wadwadaw','wadwadwadwa','wadawdaw','wdwadaw','adawda','dwawa','awdawdwa','awdawdawd','4324234','wdwada','wadwadwadwa')



module.exports = {modify_html,modify_html_another,modify_html_relatorio,modify_contrato_franqueado,modify_contrato_parceiro}
