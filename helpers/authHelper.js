const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    try {
        const saltRound = 8;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}


const comparePassword = async (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
}

module.exports = { hashPassword, comparePassword };