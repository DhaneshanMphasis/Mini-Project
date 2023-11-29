const mongoose=require("mongoose");
const dbConnect=async(server)=>{
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connection successful");
        await server.listen(process.env.PORT,()=>
        {
              console.log("server running on "+ process.env.PORT);
        })

    }
    catch(error){
        console.log("dbconnection failed",error.message);

    }
    }
module.exports=dbConnect;