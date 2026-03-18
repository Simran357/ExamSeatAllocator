const dns = require("node:dns")
dns.setServers(["8.8.8.8","8.8.4.4"])


const mongoose = require("mongoose")
const express = require("express")
const routes  = require("./routes/index")
const app = express()
const cors = require("cors")

app.use(express.json())

app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(routes)
mongoose.connect("mongodb+srv://simran26788_db_user:De4LHTTcgawaBa9G@cluster0.bu7aqhe.mongodb.net/").then(()=>{
    const port = 5002;
    app.listen(port)
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log("failed connection",err)
})


