const userModel = require('../models/userModel');
const { hashPassword } = require("../helpers/authHelper");


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



module.exports = { registerController };