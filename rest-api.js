const express = require('express')
const app =express()

const bodyParser = require('body-parser')

//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let profile = [{
    username : 'shivangi',
    email : 'agshivangi14@gmail.com',
    url : 'github.com/shivangi14'
}]

//querystring - working with url encoded
app.get('/profile',(req,res)=>{
    if(req.query.id) return profile[req.query.id]
    res.send(profile)
})

//- working with url encoded
app.post('/profile',(req,res)=>{
    profile.push(req.body)
    console.log('created - ',profile)
    res.sendStatus(201)
})

//requestparams - working with application/json
app.put('/profile/:id',(req,res)=>{
    Object.assign(profile[req.params.id],req.body)
    console.log('updated - ',profile[req.params.id])
    res.sendStatus(204)
})

//requestparams - working with application/json
app.delete('/profile/:id',(req,res)=>{
    profile.splice(req.params.id)
    console.log('deleted - ',profile)
    res.sendStatus(204)
})

app.listen(3000)