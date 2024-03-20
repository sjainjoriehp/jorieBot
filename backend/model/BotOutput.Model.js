const mongoose=require('mongoose')
const { Schema } = mongoose;

const BotOutputShema=new Schema({
   
   
    Patient_DB_ID:{
        type: Schema.Types.ObjectId,
        ref:'BotInfo',
        require:true
    },
     Patient_Booking_Reference_No: {
           type:String,
           require:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('BotOutput',BotOutputShema)