let mongoose = require("mongoose")
let usersch= new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "gen":String,
    "dob":String,
    "st":String,
    "phno":String,


})

let usemod = mongoose.model("reguser",usersch)
module.exports=usemod