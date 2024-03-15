const mongoose=require('mongoose')
const { Schema } = mongoose;

const BotInfoShema=new Schema({
   
   
    Patient_Name:{
        type:String,
        require:true
    },
    Patient_Insurance_Status:{
        type:String,
        require:true
    },
   Patient_email: {
           type:String,
           require:true
    },
    Patient_Gender:{
        type:String,
        require:true
    },
    Patient_DOB:{
        type:String,
        require:true
    },
    Patient_Address:{
        type:String,
        require:true
    },
    Patient_Phone:{
        type:String,
        require:true

    },
    Patient_Insurance_Provider:{
        type:String,
        require:false,
        default:"NA"
    },
    Patient_Insurance_ID:{
       type:String,
       require:false,
       default:"NA"
    },
    Patient_Visiting_Status:{
        type:String,
        require:true
    },
    Patient_Preferred_healthcare_Provider_Status:{
           type:String,
           require:true,

    },
    Patient_Preferred_healthcare_Provider_Name:{
        type:String,
        require:false,
        default:"NA"
    },
    Patient_Date_Of_Visit:{
        type:String,
        require:true
    },
    Patient_TimeSLot:{
        type:String,
        require:true

    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('BotInfo',BotInfoShema)