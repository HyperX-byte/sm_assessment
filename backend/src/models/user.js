const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:40
    },
    contactNumber:{type:String},
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
},{timestamps:true});

userSchema.methods = {
    authenticate: async function(password){
         return await bcrypt.compare(password,this.hash_password);
    }
}

module.exports = mongoose.model('User',userSchema);