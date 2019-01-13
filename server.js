const http = require('http')
const port = 3000

//client req object
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' :'text/plain'})
    res.end('Hello world\n')
}).listen(port)

console.log('server is running at http://localhost:%d/',port)

//npm i -g node-dev@latest --> for server restarting itself