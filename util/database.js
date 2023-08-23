const mongoose=require('mongoose')
const mongoURL="mongodb://localhost:27017/dashboard"  

const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURL,{ useUnifiedTopology:true})
        console.log('connected to db')
    }
    catch(error){
        console.log('error while connecting to database', error.message);
    }
}

module.exports=connectToMongo;