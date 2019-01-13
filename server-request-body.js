//incoming requests to server
//a server which accepts POST requests and prints the request body in the server logs.

const http = require('http')
const port =3000

http.createServer((request,response)=>{
    console.log(request.headers)
    console.log(request.method)
    console.log(request.url)

    if (request.method == 'POST') {
        let buff = ''
        request.on('data', function (chunk) {
          buff += chunk
        })
        request.on('end', function () {
          console.log(`Body: ${buff}`)
          response.end('\nAccepted body\n\n')
        })
      } else {
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end('Hello World\n')
      }
}).listen(port)

//curl -X POST localhost:3000
//curl -X POST -d "key=val" localhost:3000
//curl -X GET localhost:3000