const http = require('http')
const url ='http://www.google.com'

http.get(url,(response)=>{
    let c=0
    response.on('data', (chunk)=>{
        c++
        console.log(chunk.toString('utf8'))
    })
    response.on('end',()=>{
        console.log('response ended with %d chunks',c)
    })
}).on('error',(error)=>{
    console.error('error occured - ',error)
})

//the result will be printed as the request is happening, not all at once in the end of the request.