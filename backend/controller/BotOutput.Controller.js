const BotInfo = require('../model/BotInfo.Model');
const BotOutput = require('../model/BotOutput.Model')
const bcrypt = require('bcrypt')
const { body, validationResult, header } = require('express-validator');
const ObjectId = require('mongodb').ObjectId;


exports.FetchAllRPAOutput = async (req, res) => {
    try {
        const tokenCompare = await bcrypt.compare(process.env.SECRET_TOKEN, req.header("token"));
        if (!tokenCompare) {
            return res.status(401).json({
                status: 401,
                message: `Please Authenticate with Valid Credentials.`
            })

        }

        const input = await BotOutput.find({});

        if (input?.length > 0) {
            return res.status(200).json({
                status: 200,
                count: input?.length,
                data: input.map((dat) => {
                    return {
                        id: dat?._id,
                        Name: dat?.Patient_Name,
                        Email: dat?.Patient_email,
                        Phone: dat?.Patient_Phone
                    }
                }),
                message: `Patient detail's RPA by id: ${id}.`
            });

        } else {
            return res.status(200).json({
                status: 200,
                count: 0,
                data: [],
                message: 'Patient list RPA is Empty.'
            });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });
    }
}



exports.AddRPAOutput = async (req, res) => {
    try {

        const tokenCompare = await bcrypt.compare(process.env.SECRET_TOKEN, req.header("token"))
        if (!tokenCompare) {
            return res.status(409).json({ status: 409, error: "Please authenticate with valid token" })
        }
        // Check whether the Patient with this email exists already
        //  let o_id = new ObjectId(req.body.Patient_DB_ID)
        let user = await BotInfo.findOne({ _id: req.body.Patient_DB_ID });

        if (user?.length <= 0) {
            // console.log(req.body)
            return res.status(400).json({ status: 400, error: "Sorry a Patientis not Valid" })
        }

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, errors: errors.array() });
        }
        const BotData = new BotOutput({ ...req.body })
        const savedData = await BotData.save()

        if (savedData) {
            return res.status(201).json({
                status: 201,
                ID: savedData._id,
                message: 'RPA Output response saved.'
            });
        } else {
            return res.status(404).json({
                status: 404,
                message: 'RPA Output response not saved.'
            });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
}




