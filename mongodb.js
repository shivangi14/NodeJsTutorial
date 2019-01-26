const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/course-db'

const insertDocuments = (db, callback) => {
  const collection = db.collection('course-students')
  collection.insert([
    {name : 'Bob'}, {name : 'John'}, {name : 'Peter'}
  ], (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 3
    console.log(result.ops.length) // will be 3
    console.log('Inserted 3 documents into the edx-course-students collection')
    callback(result)
  })
}

const updateDocument = (db, callback) => {
  var collection = db.collection('course-students')
  const name = 'Peter'
  collection.update({ name : name }, { $set: { grade : 'A' } }, (error, result) => {
      if (error) return process.exit(1)
      console.log(result.result.n) // will be 1
      console.log(`Updated the student document where name = ${name}`)
      callback(result)
  })
}

const removeDocument = (db, callback) => {
  const collection = db.collection('course-students')
  const name = 'Bob'
  collection.remove({ name : name }, (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 1
    console.log(`Removed the document where name = ${name}`)
    callback(result)
  })
}

var findDocuments = (db, callback) => {
  var collection = db.collection('course-students')
  collection.find({}).toArray((error, docs) => {
    if (error) return process.exit(1)
    console.log('length = ', docs.length)
    console.log(`Found the following documents:`)
    console.dir(docs)
    callback(docs)
  })
}

mongoClient.connect(url,(err,database)=>{
    if(err) return process.exit(1)
    console.log("connected")
    let db = database.db('course-db')
    insertDocuments(db,()=>{
        updateDocument(db,()=>{
            removeDocument(db,()=>{
                findDocuments(db,()=>{
                    database.close();
                })
            })
        })
    })
})