const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors")
const app=express();
app.use(cors());
//app.use(cors({ origin: 'http://localhost:9015' , credentials :  true }));
app.use(express());
const db=require("./config/database.js");
const route=require("./Routes/router.js");
dotenv.config({path:"./config/config.env"});
app.use("/",route);
db(app);
module.export=app;