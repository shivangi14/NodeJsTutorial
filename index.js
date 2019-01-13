//const --> when not going to change in the code further
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'data/Java8.txt'),{encoding: 'utf-8'},function(error,data){
    if(error) return console.error(error)
    console.log(data)
})

//writeFile() does not creates file if not present
fs.writeFile('data/message.txt','Hello world! I have been written by fs',function(err,data){
    if(err) return console.error(err)
    console.log("written!!")
})


//{encoding: 'utf-8'} --> to convert from ascii value
fs.readFile(path.join(__dirname,'data','message.txt'),{encoding: 'utf-8'},function(err,data){
    if(err) return console.error(err);
    console.log(data)
})