const express = require("express"); 
const { getDefaultOptions, getOneDetail } = require("../controllers/index"); 
const router = express.Router(); 

// wheater/getDefaultOptions 
router.get("/getDefaultOptions", getDefaultOptions)

// wheater/getCountryInformation/:name
router.get("/getCountryInformation/:name", getOneDetail)

module.exports = router