const userModel = require('../models/userModel');
const JWT = require('jsonwebtoken');
const { hashPassword, comparePassword } = require("../helpers/authHelper");


const registerController = async (req, res) => {
    try {
        const { name, fatherName, email, dob, password, phone, address, role } = req.body;
        let authority;
        if (role === 'controller') {
            authority = 'no';
        } else {
            authority = 'yes';
        }
        //validation
        if (!name) { return res.send({ error: 'Name is Required' }) };
        if (!fatherName) { return res.send({ error: 'Father Name is Required' }) };
        if (!email) { return res.send({ error: 'Email is Required' }) };
        if (!dob) { return res.send({ error: 'Date of Birth is Required' }) };
        if (!password) { return res.send({ error: 'Password is Required' }) };
        if (!phone) { return res.send({ error: 'Phone is Required' }) };
        if (!address) { return res.send({ error: 'Address is Required' }) };

        //check exiting user
        const exisitingUser = await userModel.findOne({ email });
        if (exisitingUser) { return res.status(200).send({ success: true, message: 'Already Registered, Please Login !' }) };

        //hashed password
        const hashedPassword = await hashPassword(password);
        //save user
        const user = await new userModel({ name, fatherName, email, dob, phone, address, role, authority, password: hashedPassword }).save();
        await res.status(200).send({ success: true, message: 'User Register Successfully', user });

    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, message: 'Error in Registration', error });
    }
};


const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
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
                _id: user._id,
                name: user.name,
                fatherName: user.fatherName,
                email: user.email,
                dob: user.dob,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token
        });

    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, message: 'Error in Login', error });
    }
};


const forgetPasswordController = async (req, res) => {
    const { email, password, dob } = req.body;
    try {
        //validation
        if (!email) { return res.send({ error: 'Email is Required' }) };
        if (!password) { return res.send({ error: 'Password is Required' }) };
        if (!dob) { return res.send({ error: 'Date of Birth is Required' }) };

        //check user
        const user = await userModel.findOne({ email, dob });
        if (!user) { return res.status(400).send({ success: false, message: 'Email is not registered' }) };
        //hashed password
        const hashedPassword = await hashPassword(password);
        user.password = hashedPassword
        //save user
        await user.save();
        res.status(200).send({
            success: true,
            message: 'Password Reset Successfully',
        });
    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, message: 'Error in Forget Password', error });
    }
};



module.exports = { registerController, loginController, forgetPasswordController };