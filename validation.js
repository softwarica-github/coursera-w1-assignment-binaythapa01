const validator = require('validator');

const registerInput = (data) => {

    let errors = {};

    if (data.username) {
        if(!validator.isLength(data.username.trim(), {min: 6, max: 30})) {
            errors.username='username must be between 6 and 30 characters';    
        }

    }else errors.username ='Username is required';

    if(data.password) {
        if(!validator.isLength(data.password.trim(), {min: 6, max: 30})) {
            errors.password='username must be between 6 and 30 characters';
        }
    } else errors.password ='Password is requied';

    return {
        errors,
        isValid: Object.keys(errors).length == 0    
    }  
}

 module.exports = {
     registerInput
 }