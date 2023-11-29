const mongoose = require("mongoose");
const UserJWT = new mongoose.Schema(
  {
    User_name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Username is required"]
    }, 
    Pass_word: {
        type: String,
        trim: true,
        unique:true,
        required: [true, "Password is required"]
      },
      Email_id:
      {
        type: String,
        trim: true,
        unique:true,
        required: [true, "Email is required"]
      }
  }
);

module.exports = mongoose.model("User_JWT_Token", UserJWT);
