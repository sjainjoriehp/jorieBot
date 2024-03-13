const  BotInfo= require('../model/BotInfo.Model');
const { body, validationResult } = require('express-validator');


exports.FetchAllBotInput=async (req, res) => {
    try {
        const input = await BotInfo.find({ });
        res.json(input)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.AddBotInput= async (req, res) => {
    try {
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




