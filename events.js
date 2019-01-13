const EventEmitter = require('events')

class Job extends EventEmitter{}

job = new Job()

//to bind event and its handler(listener)
job.on('done',function(time){
    console.log("Job done at time ",time)
})

//to fire event
job.emit('done',new Date())


//multiple evet triggers

class Knock extends EventEmitter{}
knock = new Knock()
knock.on('knock',function(){
    console.log('who is there?')
})
knock.on('knock',function(){
    console.log('Go away!')
})

knock.emit('knock')
knock.emit('knock')

console.log("*with listeners removed*")

knock.emit('knock')
knock.removeAllListeners()
knock.emit('knock')     //found no corresponding listener to handle