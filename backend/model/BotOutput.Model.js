const mongoose=require('mongoose')
const { Schema } = mongoose;

const BotOutputShema=new Schema({
   
   
    Patient_Name:{
        type:String,
        require:true
    },
    Insurance:{
        type:String,
        require:true
    },
    DOS:{
        type:Date,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    DOB:{
        type:Date,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        require:true

    },

    Primary_Insurance:{
        type:String,
        require:false
    },
    Primary_Insurance_Name:{
        type:String,
        require:false
    },
   
    Primary_Insurance_Number:{
        type:String,
        require:false
    },
    Primary_Start_Date:{
        type:Date,
        require:false
    },
    Primary_End_Date:{
        type:Date,
        require:false
    },
   
    Secondary_insurance:{
        type:String,
        require:false
    },
    Secondary_Insurance_Name:{
        type:String,
        require:false
    },
    Secondary_Insurance_Number:{
        type:String,
        require:false
    },
    Secondary_Start_Date:{
        type:Date,
        require:false
    },
    Secondary_End_Date:{
        type:Date,
        require:false
    },
    Tertiary_Insurance:{
        type:String,
        require:false
    },
    Tertiary_Insurance_Name:{
        type:String,
        require:false
    },
    Tertiary_Insurance_Number:{
        type:String,
        require:false
    },
    Tertiary_Start_Date:{
        type:Date,
        require:false
    },
    Tertiary_End_Date:{
        type:Date,
        require:false
    },
    EligiblityStatus:{
       type:String,
       require:false
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('BotOutput',BotInfoShema)