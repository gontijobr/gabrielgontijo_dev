// Requisitamos o módulo http do Node
var http = require('http');

// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  // Verificamos a URL
  if (request.url === '/') {
    response.write('<h1>Servidor rodando em: localhost@3000</h1>');
  } else if (request.url === '/sobre'){
    response.write('<font color = blue face = "Arial" size = "14px"><center>Página de Sobre</center></font>');
  } else if (request.url === '/conteudo'){
    response.write('<font color = blue face = "Arial" size = "14px"><center>Página de Conteúdo</center></font>');
  } else {
    response.write('<h1>Página não encontrada</h1><a href="http://www.uol.com.br">Acesse o Site UOL</a>');
  } 

  response.end();
});

// Iniciamos o servidor criado
server.listen(3000, function() {
  console.log('Servidor em execução!!');
});