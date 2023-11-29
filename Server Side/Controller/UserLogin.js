const UserLoginSchema=require("../Models/Schema.js");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
exports. Acess_token="3d1aa0da1f321608b12ef227747eb0283452de0f6e3154edd03180b637b510e595f75a468586b7d1f06c5c969d1458dd3e3816187165e1b13a62b0c1e40209d6";
var GlobalData;
exports.tokenfinder=async(req,res)=>{
   try{ 
    const UserFind=req.body.Users;
    const UserData= await UserLoginSchema.find({Email_id:UserFind});
    exports.GlobalData={
    name:req.body.Users,
    pass:req.body.Pass1,
    token:UserData[0].Pass_word,
    username:UserData[0].User_name
   };
        res.status(200).send(JSON.stringify(UserData[0].Pass_word));
   }
   catch(err)
   {  
       res.status(400).send(err)
   }
};
exports.tokenChecker=async(req,res)=>{
    try{ 
        
         const createdData=req.body;
         res.status(200).send("Success");
    }
    catch(err){  
        res.status(400).send(err)
    }
 };
 exports.New_User_JWT=async(req,res)=>{
    try{ 
        const data=
        {
            Username:req.body.Email_id,
            Password:req.body.Pass_new
        };
        console.log(req.body)
        var Acess_tokenValid= jwt.sign(data,this.Acess_token);
        const Newuser1={
           User_name:req.body.User_new,
           Pass_word:Acess_tokenValid,
           Email_id:req.body.Email_id
        }
        console.log(typeof(Newuser1.Email_id),typeof(Newuser1.Pass_word),typeof(Newuser1.User_name))
        console.log(Newuser1);
        await UserLoginSchema.create(Newuser1);
        res.status(200).send("Success");
    }
    catch(err){  
        res.status(400).send(err)
    }
 };
 exports.AllLoginDetails=async(req,res)=>{
    try{ 
        
        var Login_all=await UserLoginSchema.find({});
        console.log(Login_all);
         res.status(200).send(JSON.stringify(Login_all));
    }
    catch(err){  
        res.status(400).send(err)
    }
 };

