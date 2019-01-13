var Job = require('./modularEventsJob.js')
var jobObject = new Job()


//details ave what have been created for that method in job
jobObject.on('done',function(details){
    console.log("Job completed on ",details.completedOn)
})

jobObject.emit('start')