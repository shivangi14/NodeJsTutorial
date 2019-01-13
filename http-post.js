const http = require('http')
const postData = JSON.stringify({foo : 'bar'})

const options = {
    hostname: 'mockbin.com',
    port:80,
    path: '/request?foo=bar&foo=baz',
    method: 'POST',
    headers :{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res)=>{
    res.on('data',(chunk)=>{
        console.log(chunk)
    })
    res.on('end',()=>{
        console.log('no more data in response')
    })
})

req.on('error',(error)=>{
    console.log('request error - ',error)
})
req.write(postData)
req.end()