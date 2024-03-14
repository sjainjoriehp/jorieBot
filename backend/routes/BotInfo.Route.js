
const express=require('express')
const router = express.Router();
let {AddBotInput,FetchAllBotInput}=require('../controller/BotInput.Controller.js')

let{BotInputValidate}=require('../Services/BotInput.Validate.js')

/*BotInput Route*/
// ROUTE 1: Create a BotInput using: POST "/api/addInput". No login required
router.post('/addInput',BotInputValidate,AddBotInput);
// ROUTE 2: Get BotInput Details using: POST "/api/fetchInput". Login required
router.post('/fetchInput',FetchAllBotInput)




module.exports = router