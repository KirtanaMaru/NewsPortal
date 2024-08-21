let mongoose=require("mongoose")
let postsch = new mongoose.Schema({
    "title":String,
    "body":String,
    "_id":String,
    "date":Date,
    "uid":String,
    "cat":String,
    "name":String
})

let postm = mongoose.model("post",postsch)
module.exports = postm