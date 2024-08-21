let express=require("express")
let app= express()
let mongoose = require("mongoose")
let route=require("../bkend/routes/resroute")
app.use(express.json())
let cors= require("cors")
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/register").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.listen(5000)

