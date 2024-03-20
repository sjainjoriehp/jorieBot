const { body, validationResult } = require('express-validator');


exports.RPAOutputValidate=[
    body('Patient_DB_ID', 'Please Provide valid Patient ID').notEmpty(),
    body('Patient_Booking_Reference_No', 'Please Provide valid reference ID').notEmpty()
  ]


  
  
           