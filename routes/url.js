const express=require('express')
const router=express.Router()
const {generateShortUrl,getanalatics}=require("../controllers/url")

router.post("/",generateShortUrl) // user enter url 
router.get("/urlInfo/:shortId",getanalatics) // get url analsis total visit
module.exports=router;
