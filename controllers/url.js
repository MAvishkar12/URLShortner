const {nanoid}=require('nanoid')
const URl=require('../models/url') // database 

async function generateShortUrl(req,res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})
    const shortId=nanoid(8) // generate a random id of length 8
    await URl.create({
        shortId:shortId,
        redirectURl:body.url
        
    })
}