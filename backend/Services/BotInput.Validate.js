const { body, validationResult } = require('express-validator');


exports.BotInputValidate=[
    body('Patient_Name', 'Enter a valid name').isLength({ min: 3 }),
    body('Patient_email', 'Please Provide valid Email').isEmail(),
    body('Patient_Gender','Please provide valid gender data').isLength({ min: 3 }),
    body('Patient_DOB','Please provide valid DOB date').notEmpty(),
    body('Patient_Address','Please provide Valid Address Detail').isLength({min:6}),
    body('Patient_Phone','Please provide valid Phone no').isMobilePhone(),
    body('Patient_Primary_Insurance_Status',"Please Enter Valid Primary Insurance Status").isLength({min:3}),
    body('Patient_Primary_Insurance_Provider_Name','Please Enter Primary Insurance Provide Name').notEmpty(),
    body('Patient_Primary_Insurance_ID','Please Enter Primary Insurance ID').notEmpty(),
    body('Patient_Secondary_Insurance_Status','Please Enter Secondary Insurance Status').notEmpty(),
    body('Patient_Secondary_Insurance_Provider_Name','Please Enter Secondary Insurance Provider Name').notEmpty(),
    body('Patient_Secondary_Insurance_ID','Please Enter Secondary Insurance ID').notEmpty(),
    body('Patient_Tertiary_Insurance_Status','Please Enter Tertiary Insurance Status ').notEmpty(),
    body('Patient_Tertiary_Insurance_Provider_Name','Please Enter Tertiary Insurance Provider Name').notEmpty(),
    body('Patient_Tertiary_Insurance_ID','Please Enter Tertiary Insurance ID').notEmpty(),
    body('Patient_Visiting_Status','Please Enter Patient Visiting Status').notEmpty(),
    body('Patient_Preferred_Doctor_Status','Please Enter Preferred Doctor Status').notEmpty(),
    body('Patient_Preferred_Doctor_Name','Please Enter Preferred Doctor Name').notEmpty(),
    body('Patient_Date_Of_Visit','Please provide valid date of visit').isLength({min:6}),
    body('Patient_TimeSLot','Please provide valid TimeSlot').notEmpty(),
    
  ]


  
  
           