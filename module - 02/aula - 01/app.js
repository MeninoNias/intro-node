var http = require('http')

http.createServer(function(req,res) {
    res.end("É nos cachorro louco de quebrada")    
}).listen(8080);

console.log("Rodando na porta 8080");