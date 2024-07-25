const userModel = require('../models/userModel');
const JWT = require('jsonwebtoken');
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const { compare } = require('bcryptjs');


const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, role } = req.body;
        //validation
        if (!name) { return res.send({ error: 'Name is Required' }) };
        if (!email) { return res.send({ error: 'Email is Required' }) };
        if (!password) { return res.send({ error: 'Password is Required' }) };
        if (!phone) { return res.send({ error: 'Phone is Required' }) };
        if (!address) { return res.send({ error: 'Address is Required' }) };

        //check exiting user
        const exisitingUser = await userModel.findOne({ email });
        if (exisitingUser) { return res.status(200).send({ success: true, message: 'Already Registered, Please Login !' }) };

        //hashed password
        const hashedPassword = await hashPassword(password);
        //save user
        const user = await new userModel({ name, email, phone, address, role, password: hashedPassword }).save();
        res.status(200).send({ success: true, message: 'User Register Successfully', user });

    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, message: 'Error in Registration', error });
    }
};


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email) { return res.send({ error: 'Email is Required' }) };
        if (!password) { return res.send({ error: 'Password is Required' }) };

        //check user
        const user = await userModel.findOne({ email });
        if (!user) { return res.status(400).send({ success: false, message: 'Email is not registered' }) };
        const match = await comparePassword(password, user.password)
        //compare password
        if (!match) { return res.status(400).send({ success: false, message: 'Please Enter Valid Credentials or Invalid Password' }) };
        //generate token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.status(200).send({
            success: true,
            message: 'User Login Successfully',
            user: {
                name: user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token
        });

    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, message: 'Error in Login', error });
    }
};



module.exports = { registerController, loginController };