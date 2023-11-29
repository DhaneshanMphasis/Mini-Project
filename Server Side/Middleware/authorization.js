var data=require("../Controller/UserLogin.js")
const jwt=require("jsonwebtoken");
exports. Authenticate =async(req,res,next)=>
{
    try{
    const authheader=req.header("Authorization");
    console.log(typeof(authheader));
    const Token=authheader;
    console.log(typeof(Token));//&& authheader.split(" ")[1];
    if(Token==null)
    {
        return res.sendStatus(401);
    }
    else
    {
        jwt.verify(Token,data.Acess_token,(err,user)=>
        {

            if(err)
            {
                return res.sendStatus(403);
            }
            
            else if(data.GlobalData.pass==user.Password && data.GlobalData.name==user.Username)
            {
                next();
            }
            else{
                return res.sendStatus(403);
            }
            
        })
    }
}
    catch(err){ 
        res.status(400).send(err)
    }

}