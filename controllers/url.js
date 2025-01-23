
const URL=require('../models/url')

async function generateShortUrl(req,res) {
    console.log("Inside a geturl function");
    
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"Url is required"}) // if no url present
    const { nanoid } = await import('nanoid');
    const shortId=nanoid(8) // generate a random id of length 8
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[]
        
    })

    return res.json({id:shortId})
}

async function getanalatics(req,res){
   const shortId=req.params.shortId;
    const result= await URL.findOne({shortId});
    return  res.json({totalCliclks:result.visitHistory.length,analatics:result.visitHistory})

}
module.exports={
    generateShortUrl,
    getanalatics
}