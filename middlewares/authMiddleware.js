const JWT = require('jsonwebtoken');
const userModel = require('../models/userModel')

const requireSignIn = (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();    
    } catch (error) {
        console.log(error);
        
    }
}

//admin access
const isAdmin = async(req, res, next) =>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role === 'admin' || 'controller') {
            next();
        }else{
            return res.status(401).send({ success: false, message: 'UnAuthorized Access as Admin'});
        }
    } catch (error) {
        console.log('Error in isAdmin', error)
    }
}


const isController = async(req, res, next) =>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.authority === 'yes') {
            next();
        }else{
            return res.status(401).send({ success: false, message: 'UnAuthorized Access as Controller'});
        }
    } catch (error) {
        console.log('Error in isAdmin', error)
    }
}

module.exports = {requireSignIn, isAdmin, isController};