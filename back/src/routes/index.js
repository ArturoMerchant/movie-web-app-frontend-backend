const {Router} = require("express");
const {getData, addData} = require("../controllers/index")

const router = Router();

router.get('/', getData)

router.post('/', addData); 

module.exports = router;
