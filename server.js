const express = require('express')
const mod = require('./modify')
const app = express()
const fs = require('fs')
const cors = require("cors")



app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

let port = 7000

app.listen(port,()=>{
    console.log('Conectado.... aberto na porta '+port.toString())
})


function createPdf(file){

    //verificar se pasta existe,caso não sera criada
    if(!fs.existsSync('./contratosPdf')){

        fs.mkdirSync('./contratosPdf')

    }
    const dataBruta = new Date()

    const data = new Date(dataBruta.valueOf() - 180).toLocaleDateString('pt-br').split('/').join('-')
    const hora = new Date(dataBruta.valueOf() - 180).toLocaleTimeString('pt-br').split(':').join('')


    fs.writeFileSync('./contratosPdf/'+`${data}_${hora}.pdf`,file,{encoding:"binary"})


}

app.post('/contrato',async (req,res)=>{


        try{
        nome= req.body.nome
        cidade= req.body.cidade
        estado= req.body.estado
        nome_empresa= req.body.nome_empresa
        bairro= req.body.bairro
        numero= req.body.numero
        hashcode= req.body.hashcode
        ip= req.body.ip
        local= req.body.local
        cnpj= req.body.cnpj
        cpf= req.body.cpf
        phone= req.body.phone
        rua= req.body.rua
        email= req.body.email
        cep= req.body.cep
        porcentagem1= req.body.porcentagem1
        porcentagem2= req.body.porcentagem2
        porcentagem3= req.body.porcentagem3
        extenso1 = req.body.extenso1
        extenso2 = req.body.extenso2
        extenso3 = req.body.extenso3


        await mod.modify_html(nome_empresa,cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,porcentagem1,extenso1,porcentagem2,extenso2,porcentagem3,extenso3,numero,ip,local,hashcode)


        let file = fs.readFileSync('./contrato.pdf')

        

        //savando pdf
        createPdf(file)

        res.contentType('application/pdf')
        res.send(file)
        }catch(e){
            res.status(500).send(e)
        }


        

    

})

app.post('/franquia',async (req,res)=>{


    try{
        nome= req.body.nome
        cidade= req.body.cidade
        estado= req.body.estado
        nome_empresa= req.body.nome_empresa
        bairro= req.body.bairro
        numero= req.body.numero
        cnpj= req.body.cnpj
        cpf= req.body.cpf
        phone= req.body.phone
        rua= req.body.rua
        email= req.body.email
        cep= req.body.cep



        await mod.modify_html_another(cnpj,nome_empresa,rua,rua,nome,cpf,bairro,cidade,phone,estado,cep,email)


        let file = fs.readFileSync('./franquia.pdf')
        res.contentType('application/pdf')
        res.send(file)

    }catch{

        res.status(500).send('Algum erro aconteceu!')

    }

    

})

app.get(`/docclient/:hashcode`,(req,res)=>{


    try{
        let file = fs.readFileSync('./pdfs/'+req.params.hashcode+'.pdf')
        res.contentType('application/pdf')
        res.send(file)

    }catch{
        res.status(500).send('Algum erro aconteceu!')
    }

})

app.get(`/docfranq/:hashcode`,(req,res)=>{


    try{
        let file = fs.readFileSync('./pdfsf/'+req.params.hashcode+'.pdf')
        res.contentType('application/pdf')
        res.send(file)

    }catch{
        res.status(500).send('Algum erro aconteceu!')
    }

})

app.post('/relatorio',async (req,res)=>{


    try{
        
        const nome_empresa = req.body.nome_empresa
        const cnpj = req.body.cnpj
        const valor1 = req.body.valor1
        const valor2 = req.body.valor2

        await mod.modify_html_relatorio(nome_empresa,cnpj,valor1,valor2)
        
        
        file = fs.readFileSync('relatorio.pdf')
        res.contentType('application/pdf')
        res.send(file)
    }catch{
        res.status(500).send('Algum erro aconteceu!')
    }



})

app.post('/contratof',async (req,res)=>{


    try{
    nome= req.body.nome
    cidade= req.body.cidade
    estado= req.body.estado
    bairro= req.body.bairro
    numero= req.body.numero
    hashcode= req.body.hashcode
    ip= req.body.ip
    local= req.body.local
    cnpj= req.body.cnpj
    cpf= req.body.cpf
    phone= req.body.phone
    rua= req.body.rua
    email= req.body.email
    cep= req.body.cep


    await mod.modify_contrato_franqueado(cnpj,nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,ip,local,hashcode)


    let file = fs.readFileSync('./contratofranqueado.pdf')



    //savando pdf
    createPdf(file)



    res.contentType('application/pdf')
    res.send(file)
    }catch(e){
        res.status(500).send(e)
    }






})

app.post('/contratop',async (req,res)=>{


    try{
    const nome= req.body.nome
    const cidade= req.body.cidade
    const estado= req.body.estado
    const bairro= req.body.bairro
    const numero= req.body.numero
    const hashcode= req.body.hashcode
    const ip= req.body.ip
    const cpf= req.body.cpf
    const phone= req.body.phone
    const rua= req.body.rua
    const email= req.body.email
    const cep= req.body.cep
    const porcent= req.body.porcent
    const gerardocclient = req.body.doc

    console.log('fw')
    await mod.modify_contrato_parceiro(nome,cpf,email,phone,rua,numero,bairro,cidade,estado,cep,ip,hashcode,porcent,gerardocclient)


    let file = fs.readFileSync('./parceirofranqueado.pdf')



    //savando pdf
    createPdf(file)

    res.contentType('application/pdf')
    res.send(file)
    }catch(e){
        res.status(500).send(e)
    }






})

app.get('/contratos/:doc',(req,res)=>{



    const doc = req.params.doc

    try{

        const path = './contratosPdf/'+`${doc}.pdf`
        let file = fs.readFileSync(path)
        res.contentType('application/pdf')
        res.send(file)

    }catch(e){
        res.status(500).send('não existe esse contrato!')
    }

})

app.get('/links',(req,res)=>{

    const dirs =  fs.readdirSync('./contratosPdf')

    var links = []

    dirs.forEach(link=>{

        const urlFinal = `http://157.245.95.224:7000/contratos/${link.split('.pdf')[0]}`;

        links.push(urlFinal)

    })

    res.send(links)
})

