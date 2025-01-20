const mongoose=require('mongoose')


const UrlScheme=mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true}
)

const URL=mongoose.model('url',UrlScheme)

module.exports=URL