const AdminTaskSchema=require("../Models/AdminSchema.js");
exports.AdminTaskAll=async(req,res)=>{
   try{ 
     var Task_all=await AdminTaskSchema.find({});
     res.status(200).send(Task_all);
   }
   catch(err)
   {  
       res.status(400).send(err)
   }
};
exports.AdminTaskInsert=async(req,res)=>{
    try{ 
     var Insert_task=req.body;
      await AdminTaskSchema.create(Insert_task);
      res.status(200).send("Success");
    }
    catch(err)
    {  
        res.status(400).send(err)
    }
 };
 exports.AdminTaskDelete=async(req,res)=>{
    try{ 
        const id=req.params.id;
        console.log(id);
        await AdminTaskSchema.deleteOne({_id:id});
        res.status(200).send("Success");
    }
    catch(err)
    {  
        res.status(400).send(err)
    }
 };
 exports.AdminTaskUpdate=async(req,res)=>{
    try{ 
        const id=req.params.id;
        console.log( "id",id);
        console.log(req.body);
        await AdminTaskSchema.findOneAndUpdate({_id:id},req.body);
        res.status(200).send("Success");
    }
    catch(err)
    {  
        res.status(400).send(err)
    }
 };
 