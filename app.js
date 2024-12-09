const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "4-4-2023"

mongoClient.connect(connectionUrl , (error, res1) => {
    if(error){
        return console.log('error has occured')
    }
    console.log('All perf')

    const db = res1.db(dbname)

    // /////////////////////////////////////////////
    db.collection('users').insertOne({
        name:'ahmed',
        age: 26
    
    } , (error , data) =>{
        if(error){
            console.log('unable to insert Data')
        }
        console.log(data.insertedId)
    })

    // //////////////////////////////////////////////////////
    db.collection('users').insertMany(
       [ {
            name:'islam',
            age: 26
        },
        {
            name:'reem',
            age: 20
        },

        {
            name:'shrouk',
            age: 24
        },
        {
            name:'zaki',
            age: 24
        },
        {
            name:'esraa',
            age: 24
        },
        {
            name:'mohamed',
            age: 24
        },
        {
            name:'adel',
            age: 24
        },
        {
            name:'soha',
            age: 24
        },
        {
            name:'aya',
            age: 25
        }] , (error, data)=>{
            if(error){
                console.log('unable to insert Data')
            }
            console.log(data.insertedCount)
        }
    )

    // //////////////////////////////////////////////

    db.collection('users').findOne({_id:mongodb.ObjectId("67567f1ce76d5d6d6475fc62")}
    ,(error,user)=>{
        if(error){
            console.log('unable to insert Data')
        }
        console.log(user)
    }
    )
    // //////////////////////////////////////////////////////////////////////


db.collection('users').find({age:24}).limit(3).toArray((error, users)=>{
    if(error){
        console.log('error has occured')
    }
    console.log(users)
    })
    // ///////////////////////////////////////////////



db.collection('users').find({age:24}).limit(3).count((error, users)=>{
    if(error){
        console.log('error has occured')
    }
    console.log(users)
    })

    ///////////////////////////////////////////////////////
  
    db.collection('users').find({age:24}).limit(4).toArray((error, users)=>{
        if(error){
            console.log('error has occured')
        }
        console.log(users)
        })
    // ///////////////////////////////////////////////////////////
   



db.collection('users').updateOne({_id:mongodb.ObjectId("67570684664b6941e6a07c8e")} , {


$set:{name : "Osama"},
$inc:{age:4}
}).
then((data1) => {console.log(data1.modifiedCount)})
.catch((error) =>{console.log(error)})


// ///////////////////////////////////////////////////

db.collection('users').updateMany({} , {
    $inc : {age:10}
})
.then((data1)=> {console.log(data1.modifiedCount)})
.catch((error) =>{console.log(error)})
///////////////////////////////////////////////////////
delete
db.collection("users").deleteOne({_id : mongodb. ObjectId("67570684664b6941e6a07c90")})
    .then((data1)=> {console.log(data1.deletedCount)})
    .catch((error) =>{console.log(error)})

// ////////////////////////////////////////////////////////////////////
    db.collection("users").deleteMany({})
    .then((data1)=> {console.log(data1.deletedCount)})
    .catch((error) =>{console.log(error)})












})
