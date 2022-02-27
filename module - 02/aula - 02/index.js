const express = require('express');
const app = express();

app.listen(8080, function(error){
    if(error){
        console.log('Deu merda.');
    }
    else{
        console.log('Servidor ta no ar.')
    }
});