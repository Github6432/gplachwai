const User = require('../models/userModel');






const getAllUsersController = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, message: 'Error While Get ALl Users', error });
    }
};


const deleteUserController = async (req, res) => {
    const { userid } = req.body;
    console.log(userid)
    try {
        await User.findOneAndDelete({ _id: userid });
        res.status(200).send("User Deleted");
    } catch (error) {
        res.status(400).send({ success: false, message: 'Error While Delete User', error });
    }
};


const editUserController = async (req, res) => {
    const { user } = req.body;
    const userid = user._id;
    const userrole = user.role;
    try {
        const userData = await User.findOne({ _id: userid });
        userData.role = userrole === 'admin' ? 'user' : 'admin';
        await userData.save();
        res.status(201).send({ success: false, message: 'User Updated Successfully' });
    } catch (error) {
        res.status(400).send({ success: false, message: 'Error While Delete User', error });
    }
};



module.exports = { getAllUsersController, deleteUserController, editUserController };