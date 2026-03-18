const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
         unique:true
    },
    username:{
        type:String,
    

    },  password:{
        type:String,
      

    }, 
    role:{
        type: String,
        default:"user",
        enum:["user","Admin","Student","Teacher"]
    },
    provider:{
        type:String
    },
    avatar:{
        type:String
    }

}, {timestamps:true}
)

const User = mongoose.model("user",userSchema)
module.exports = User