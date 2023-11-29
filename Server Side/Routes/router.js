const express=require("express");
const router=express.Router();
router.use(express.json());
const User_Login=require("../Controller/UserLogin.js");
const Admin_Task=require("../Controller/AdminTask.js")
const Auths=require("../Middleware/authorization.js");
router.post("/login",User_Login.tokenfinder);
router.get("/logincheck", Auths.Authenticate,User_Login.tokenChecker)
router.post("/newlogin",User_Login.New_User_JWT);
router.get("/admintask",Admin_Task.AdminTaskAll);
router.post("/admintask",Admin_Task.AdminTaskInsert);
router.delete("/admintask/:id",Admin_Task.AdminTaskDelete);
router.put("/admintask/:id",Admin_Task.AdminTaskUpdate);
router.get("/alllogin",User_Login.AllLoginDetails)
module.exports=router;