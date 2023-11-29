const express=require("express");
const app=express();
app.use("/",express.static("./public"));
const cors=require("cors");
app.use(cors());
app.use(express.json());
app.listen(9015,()=>{
console.log("clientserver running on portno 9015");
});