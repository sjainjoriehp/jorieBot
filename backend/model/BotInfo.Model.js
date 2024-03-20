const mongoose=require('mongoose')
const { Schema } = mongoose;

const BotInfoShema=new Schema({
   
   
    Patient_Name:{
        type:String,
        require:true
    },
    // Patient_Insurance_Status:{
    //     type:String,
    //     require:true
    // },
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
    Patient_Primary_Insurance_Status:{
        type:String,
        require:true,
    },
    Patient_Primary_Insurance_Provider_Name:{
        type:String,
        require:true,
    },
    Patient_Primary_Insurance_ID:{
        type:String,
        require:true
    },
    Patient_Secondary_Insurance_Status:{
       type:String,
       require:true
    },
    Patient_Secondary_Insurance_Provider_Name:{
            type:String,
            require:true
    },
    Patient_Secondary_Insurance_ID:{
        type:String,
        require:true
    },
    Patient_Tertiary_Insurance_Status:{
        type:String,
        require:true
     },
     Patient_Tertiary_Insurance_Provider_Name:{
             type:String,
             require:true
     },
     Patient_Tertiary_Insurance_ID:{
         type:String,
         require:true
     },
    Patient_Visiting_Status:{
        type:String,
        require:true
    },
    Patient_Preferred_Doctor_Status:{
           type:String,
           require:true,

    },
    Patient_Preferred_Doctor_Name:{
        type:String,
        require:true
    },
    Patient_Date_Of_Visit:{
        type:String,
        require:true
    },
    Patient_TimeSLot:{
        type:String,
        require:true

    },
    Details_Fetch_status_By_RPA:{
        type:String,
        require:false,
        default:"false"
    },
    Details_Fetch_Time_By_RPA:{
        type:String,
        require:false,
        default:"NA"

    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('BotInfo',BotInfoShema)