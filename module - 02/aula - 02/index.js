const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.send('TO ON')
});

app.get('/home', function(req, res){
    res.send('TO ON na rota HOME')
});

app.get('/index', function(req, res){
    res.send('<h1>TO ON na rota INDEX</h1>')
});

app.get('/ola/:nome', function(req, res){

    var nome = req.params.nome

    res.send(`<h1>Olá ${nome}</h1>`)
});

app.get('/ola/:nome/:sobrenome?', function(req, res){

    var nome = req.params.nome
    var sobrenome = req.params.sobrenome

    if(sobrenome){
        res.send(`<h1>Olá ${nome} ${sobrenome}</h1>`)
    }

    res.send(`<h1>Olá ${nome}</h1>`)
});

app.listen(8080, function(error){
    if(error){
        console.log('Deu merda.');
    }
    else{
        console.log('Servidor ta no ar.')
    }
});