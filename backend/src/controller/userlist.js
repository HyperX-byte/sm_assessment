const User = require('../models/user');

function createEmailList(users){
    const emailList = [];
    for(let user of users){
        emailList.push(user.email);
    }
    return emailList;
}

exports.getUserEmails = (req,res) => {
    User.find({})
    .exec((error, users) => {
        if(error) return res.status(400).json({error});
        if(users){
            const emailList = createEmailList(users) 
            return res.status(200).json({emailList});
        }
    });
}