const  BotInfo= require('../model/BotInfo.Model');
const bcrypt=require('bcrypt')
const { body, validationResult, header } = require('express-validator');


exports.FetchAllBotInput=async (req, res) => {
    try {
        const tokenCompare = await bcrypt.compare(process.env.SECRET_TOKEN,req.header("token"));
        if (!tokenCompare) {
          return res.status(401).json({ error: "Please authenticate with valid token" })
        }

        const input = await BotInfo.find({ });
        res.json(input)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.AddBotInput= async (req, res) => {
    try {

        const tokenCompare = await bcrypt.compare(process.env.SECRET_TOKEN,req.header("token"))
      if (!tokenCompare) {
        return res.status(401).json({ error: "Please authenticate with valid token" })
      }
         // Check whether the Patient with this email exists already
      let user = await BotInfo.find({ Patient_Name:req.body.Patient_Name });

      if (user?.length>0) {
        console.log(req.body)
        return res.status(400).json({ error: "Sorry a Patient with this DOB already exists" })
      }
      
      
        // const { Patient_Name,Insurance,DOS,Gender,DOB,Address,Phone,
        //     Primary_Insurance,Primary_Insurance_Name,Primary_Insurance_Number,Primary_Start_Date,Primary_End_Date,
        //     Secondary_insurance, Secondary_Insurance_Name, Secondary_Insurance_Number,Secondary_Start_Date,Secondary_End_Date ,
        //     Tertiary_Insurance,Tertiary_Insurance_Name,Tertiary_Insurance_Number,Tertiary_Start_Date,Tertiary_End_Date} = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const BotData = new BotInfo({...req.body})
        const savedData = await BotData.save()

        res.json(savedData)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}




