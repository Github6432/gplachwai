const userModel = require('../models/userModel');
const JWT = require('jsonwebtoken');
const { hashPassword, comparePassword } = require("../helpers/authHelper");


const registerController = async (req, res) => {
    try {
        const { name, fatherName, email, dob, password, phone, address, role } = req.body;
        let authority = role === 'controller' ? 'no' : 'yes';
        // Validation
        if (!name) return res.status(400).send({ message: 'Name is Required' });
        if (!fatherName) return res.status(400).send({ message: 'Father Name is Required' });
        if (!email) return res.status(400).send({ message: 'Email is Required' });
        //check exiting user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) { return res.status(400).send({ message: 'Already Registered, Please Login!' }); }
        if (!dob) return res.status(400).send({ message: 'Date of Birth is Required' });
        if (!password) return res.status(400).send({ message: 'Password is Required' });
        if (!phone) return res.status(400).send({ message: 'Phone is Required' });
        if (!address) return res.status(400).send({ message: 'Address is Required' });


        //hashed password
        const hashedPassword = await hashPassword(password);
        //save user
        const user = await new userModel({ name, fatherName, email, dob, phone, address, role, authority, password: hashedPassword }).save();
        res.status(201).send({ success: true, message: 'User Register Successfully', user });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Error in Registration', error });
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
        res.status(500).send({ success: false, message: 'Error in Login', error });
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
        res.status(500).send({ success: false, message: 'Error in Forget Password', error });
    }
};

const testController = (req, res) => {
    try {
        console.log('Protected Routed')
    } catch (error) {
        console.log('ERROR IN TEST CONTROLLER', error)
    }
}



module.exports = { registerController, loginController, forgetPasswordController, testController };