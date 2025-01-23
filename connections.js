const mongoose=require('mongoose')

async function ConnectionDB(link){
   return await mongoose.connect(link)
    .then(()=>{
          console.log("Database Connection Done");
          
    }).catch(()=>{
        console.log("Error in DB Connection");
        
    })
}

module.exports={
    ConnectionDB
}