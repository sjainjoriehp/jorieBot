const { body, validationResult } = require('express-validator');


exports.BotInputValidate=[
    body('Patient_Name', 'Enter a valid name').isLength({ min: 3 }),
    body('Insurance', 'Enter a valid insurance input').isLength({ min: 3 }),
    body('DOS', 'Please Provide valid DOS Date').notEmpty(),
    body('Gender','Please provide valid gender data').isLength({ min: 3 }),
    body('DOB','Please provide valid DOB date').notEmpty(),
    body('Address','Please provide Valid Address Detail').isLength({min:6}),
    body('Phone','Please provide valid Phone no').isMobilePhone()
    
  ]

  
           