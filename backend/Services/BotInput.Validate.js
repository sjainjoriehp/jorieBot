const { body, validationResult } = require('express-validator');


exports.BotInputValidate=[
    body('Patient_Name', 'Enter a valid name').isLength({ min: 3 }),
    body('Patient_email', 'Please Provide valid Email').isEmail(),
    body('Patient_Gender','Please provide valid gender data').isLength({ min: 3 }),
    body('Patient_DOB','Please provide valid DOB date').notEmpty(),
    body('Patient_Address','Please provide Valid Address Detail').isLength({min:6}),
    body('Patient_Phone','Please provide valid Phone no').isMobilePhone(),
    body('Patient_Primary_Insurance_Status',"Please Enter Valid Primary Insurance Status").isLength({min:3}),
    body('Patient_Visiting_Status','Plese provide valid Visiting status').notEmpty(),
    body('Patient_Preferred_Doctor_Status','Please enter preferred doctor status').notEmpty(),
    body('Patient_Date_Of_Visit','Please provide valid date of visit').isLength({min:6}),
    body('Patient_TimeSLot','Please provide valid TimeSlot').notEmpty(),
    
  ]

  
           