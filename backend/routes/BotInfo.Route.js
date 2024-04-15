const express=require('express')
const router = express.Router();
let {AddBotInput,FetchAllBotInput}=require('../controller/BotInput.Controller.js')
let {FetchAllRPAOutput,AddRPAOutput} =require('../controller/BotOutput.Controller.js')
let {checkTcken} =require('../Auth/auth.middleware.js')
let{BotInputValidate}=require('../Services/BotInput.Validate.js')
let{RPAOutputValidate} =require('../Services/RPAOutput.Validate.js')

/*BotInput Route*/
// ROUTE 1: Create a BotInput using: POST "/api/addInput". Token required
router.post('/addInput',checkTcken,BotInputValidate,AddBotInput);
// ROUTE 2: Get BotInput Details using: GET "/api/fetchInput". Token required
router.get('/fetchInput',checkTcken,FetchAllBotInput)

//ROute 3 : Get RPAOutput , details using  GET "api/rpaOutput"  Token required
router.get('/rpaOutput',checkTcken,FetchAllRPAOutput)

//Route 4 : Post RPAOutput , details using post "api/addRPAOutput" Token required
router.post('/addRPAOutput',checkTcken,RPAOutputValidate,AddRPAOutput);

module.exports = router