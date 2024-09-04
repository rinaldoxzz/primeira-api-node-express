const express = require('express');   //Importa o framework para o projeto
const app = express();  //Cria a instância principal da aplicação
const port = 3000;  //Define a porta onde o servidor vai escutar requisições

app.get('/produtos', (req, res) => {   //Define uma req GET e o URL
    res.status(200)     //Responde com o Status code 200 ('OK')
    .json (produtos)    //Res.json converte o array de produtos em JSON e envia d volta para o usuario
})

app.listen(port, () => {     //Inicia o servidor express na porta 3000 e retorna a msg.
    console.log(`Servidor rodando em http://localhost:${port}`);
})

let produtos = [
    {
        nome: 'Produto 1',
        precoUnitario: 10.99,
        quantidade: 5,
        categoria: 'Eletrônicos',
        fabricante: {
            nome: 'Fabricante A',
            endereco: 'Rua X, Número Y'
        }
    },
    {
        nome: 'Produto 2',
        precoUnitario: 19.99,
        quantidade: 10,
        categoria: 'Roupas',
        fabricante: {
            nome: 'Fabricante B',
            endereco: 'Avenida Z, Número W'
        }
    },
    {
        nome: 'Produto 3',
        precoUnitario: 5.99,
        quantidade: 3,
        categoria: 'Livros',
        fabricante: {
            nome: 'Fabricante C',
            endereco: 'Praça Q, Número R'
        }
    }
];