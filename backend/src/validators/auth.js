const { check, validationResult } = require('express-validator');
exports.validateSignupRequest = [
    check('name')
    .isLength({ min: 3 })
    .withMessage('Name must be of minimum 3 character')
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage('Only letters and spaces accepted in Name'),
    check('mobile')
    .notEmpty()
    .isLength({min:10,max:10})
    .withMessage('Mobile is Required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is Required'),
     check('password')
     .isLength({ min: 8,})
     .withMessage('Password Must be atleast 8 character long')
     .matches(/\d/)
     .withMessage('Password Must be atleast 1 digit')
     .matches(/[A-Z]/)
     .withMessage('Password Must be atleast 1 Uppercase Character')
     .matches(/[a-z]/)
     .withMessage('Password Must be atleast 1 Lowercase Character')     
     .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Password Must be atleast 1 special character')
]

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid Email is Required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password Must be atleast 6 character long')
]

exports.isRequestValidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(201).json({errors: errors.array()[0].msg})
    }
    next();
}