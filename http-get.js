const http = require('http')
const url ='http://www.google.com'

http.get(url,(response)=>{
    let c=0, rawData =''
    response.on('data', (chunk)=>{
        c++
        rawData += chunk
    })
    response.on('end',()=>{
        console.log(rawData)
        console.log('response ended with %d chunks',c)
    })
    response.on('error',(error)=>{
        console.log('other error  - ',error)
    })
}).on('error',(error)=>{
    console.error('error occured while get - ',error)
})


//output to console will happen only at the end of the request when all the data has been received.
//get entire response before processing it
//buffer is used when dealing mainly with json

//to parse json
/*
response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch (e) {
      console.error(e.message)
    }
  })*/
