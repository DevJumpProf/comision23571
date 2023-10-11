const http = require ("http"); //traigo htttp : modulo nativo de node


http.createServer((req,res)=>{ // funcion create server con callback (req,res)
res.writeHead(200,{"content-Type":"text/plain"}); // contenido de texto plano
res.end ("Server con node ") //  texto de salida
}).listen(3030,"localhost") // escucha puerto y origen del servidor