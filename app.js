const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')

//TYPE 1 - NPM MODULES MIDDLEWARE
app.use(bodyParser.json)

app.use(morgan('dev'))

//TYPE 2 - CUSTOM MIDDLEWARE
//will be used for all the routes
app.use((req,res,next) => {
    console.log(' method : url  -> ',req.method ,': ',req.url)
    next()
})

//will work with http://localhost:3000/accounts?api_key=1234
app.use((req,res,next) => {
    if(req.query.api_key){
        next()
    }
    else{
        res.status(401).send({msg :'Not autorised'})
    }
})

app.get('/',(req,res)=>{
    res.send("hello world! i am express")
})

//inline middleware
app.get('/accounts',(req,res,next)=>{
    console.log('account inline middleware')
    next(new Error('oops'))
},(req,res)=>{
    res.send("i will show accounts!")
})

app.get('/transactions',(req,res)=>{
    console.log(req.body)
    res.send("i will show transactions!")
})

//error handler - middleware
app.use((error,req,res,next) =>{
    console.log('error handler')
    res.status(500).send(error)
})

app.listen(3000)

console.log('server started on port 3000')