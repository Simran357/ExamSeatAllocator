const mongoose = require("mongoose")
const express = require("express")
const routes  = require("./routes/index")
const chief = express()
const cors = require("cors")

chief.use(express.json())

chief.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
chief.use(routes)
mongoose.connect("mongodb+srv://simran26788_db_user:Nrh89CxOUsKuqGiT@cluster0.bu7aqhe.mongodb.net/").then(()=>{
    const port = 5001;
    chief.listen(port)
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log("failed connection",err)
})


