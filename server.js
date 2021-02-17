const express = require('express')
const mod = require('./modify')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

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
        res.contentType('application/pdf')
        res.send(file)

    }catch{

        res.status(500).send('Algum erro aconteceu!')

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


let port = 7000

app.listen(port,()=>{
    console.log('Conectado.... aberto na porta '+port.toString())
})