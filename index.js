const express=require('express')
const app=express()
const port=8000;
const  UrlRouter=require('./routes/url')
const {ConnectionDB}=require('./connections')
const URLDB=require('./models/url')

// mongodb connection
ConnectionDB("mongodb://localhost:27017/urlshorter")

// middleware
app.use(express.json())

app.use("/url",UrlRouter)
// routing 
app.get("/:shortId",async (req,res)=>{
    const shortId=req.params.shortId;
    console.log("Short id is",shortId);
    
     const entry= await URLDB.findOneAndUpdate(
        { shortId},
        { $push:{
                visitHistory:{
                    timestamp:Date.now()
                }  
            }
          }
    )
   console.log("Entry document",entry);
   res.redirect(entry.redirectURL)
})




app.listen(port,()=>{
    console.log("Server start at Port",port);
})
