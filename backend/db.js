const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()

let mongoURI=process.env.DATABASE_URL;

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }

module.exports=connectToMongo;