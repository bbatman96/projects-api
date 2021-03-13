const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const authorSchema =new Schema({


name:{
    type: String,
    max:32,
    required:true,
},
email:{
    type: String,
    max:128,
    unique:true,
},
mobile:{
    type: String,
    max:12,
},
});
module.exports=Model('author', authorSchema);