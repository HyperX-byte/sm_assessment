const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = (req, res) => {
    User.findOne({email: req.body.email })
    .exec( async (error,user) => {
        if(error) return res.status(400).json({error});
        if(user) return res.status(400).json({
            message: 'User already registered'
        });
        const {
            name,
            contactNumber,
            email,
            password
        } = req.body;
        const hash_password = await bcrypt.hash(password,10);
        const _user = new User({
            name,
            contactNumber,
            email,
            hash_password,
        });

        _user.save((error, data) => {
            if(error){
                return res.status(400).json({
                    message: "Something Went Wrong"
                });
            }
            if(data){
                return res.status(200).json({
                    message:'User Registered Successfully'
                })
            }
        });
    });
}

exports.signin = (req,res) => {
    User.findOne({email: req.body.email })
    .exec((error, user) => {
        if(error) return res.status(400).json({error});
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id:user._id, role: user.role },process.env.JWT_SECRET,{expiresIn: '1h'});
                const { _id, name, email, role} = user;
                res.status(200).json({
                    token,
                    user:{ _id, name, email, role }
                });
            }else{
                return res.status(400).json({
                    message:"Invalid Password"
                });
            }
        }else{
            return res.status(400).json({message:'Account Does Not Exists'});
        }
    })
}

exports.signout = (req,res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "Sign Out Successfully"
    });
}