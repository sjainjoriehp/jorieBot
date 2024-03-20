const  BotInfo= require('../model/BotInfo.Model');
const bcrypt=require('bcrypt')
const { body, validationResult, header } = require('express-validator');


exports.FetchAllBotInput=async (req, res) => {
    try {
        const tokenCompare = await bcrypt.compare(process.env.SECRET_TOKEN,req.header("token"));
        if (!tokenCompare) {
          return res.status(401).json({
            status: 401,
            message: `Please Authenticate with Valid Credentials.`
        })

        }

        const input = await BotInfo.find({ Details_Fetch_status:"false" });
        let allID=input.map((e)=>{
          return e._id
         })
         const UpdateResult=await BotInfo.updateMany( { _id: { $in:allID}}, { $set: { Details_Fetch_status:"True" ,Details_Fetch_Time: new Date() } } )
        
         if (input?.length > 0 && UpdateResult.modifiedCount >0 ) {
          return res.status(200).json({
              status: 200,
              count: input?.length,
              data: input.map((dat) => {
                  return {
                      id: dat?._id,
                      Name: dat?.Patient_Name,
                      Email: dat?.Patient_email,
                      Phone: dat?.Patient_Phone,
                      Address: dat?.Patient_Address,
                      VisitingStatus:dat?.Patient_Visiting_Status,
                      DateOfVisit:dat?.Patient_Date_Of_Visit,
                      TimeSlot:dat?.Patient_TimeSLot
                  }
              }),
              message: `Patient detail's by id: ${id}.`
          });

      } else {
          return res.status(200).json({
              status: 200,
              count: 0,
              data: [],
              message: 'Patient list is Empty.'
          });
      }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });
    }
}



exports.AddBotInput= async (req, res) => {
    try {

        const tokenCompare = await bcrypt.compare(process.env.SECRET_TOKEN,req.header("token"))
      if (!tokenCompare) {
        return res.status(409).json({ status: 409,error: "Please authenticate with valid token" })
      }
         // Check whether the Patient with this email exists already
      let user = await BotInfo.find({ Patient_Name:req.body.Patient_Name });

      if (user?.length>0) {
        // console.log(req.body)
        return res.status(400).json({ status:400,error: "Sorry a Patient with this name already exists" })
      }
      
      
        // const { Patient_Name,Insurance,DOS,Gender,DOB,Address,Phone,
        //     Primary_Insurance,Primary_Insurance_Name,Primary_Insurance_Number,Primary_Start_Date,Primary_End_Date,
        //     Secondary_insurance, Secondary_Insurance_Name, Secondary_Insurance_Number,Secondary_Start_Date,Secondary_End_Date ,
        //     Tertiary_Insurance,Tertiary_Insurance_Name,Tertiary_Insurance_Number,Tertiary_Start_Date,Tertiary_End_Date} = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({status:400, errors: errors.array() });
        }
        const BotData = new BotInfo({...req.body})
        const savedData = await BotData.save()

        if (savedData) {
          return res.status(201).json({
              status: 201,
              ID: savedData._id,
              message: 'Patient response saved.'
          });
      } else {
          return res.status(404).json({
              status: 404,
              message: 'Patient response not saved.'
          });
      }

    } catch (error) {
        console.error(error.message);
       return res.status(500).json({status:500,message:"Internal Server Error"});
    }
}




