const User = require('../models/user');
const bcrypt = require('bcrypt');

async function registerUser(req, res) {
    try {
        const { username, password } = req.body;
        const data = {
            username,
            password: await bcrypt.hash(password, 12)
        }
        const user = new User(data);
        await user.save();
        res.send({
            status: 200,
            message: 'User registered successfully'
        });
    }
    catch (e) {
        res.send({
            status:401,
            message:"Error"
        })
        console.log(e.message);
    }
}

async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (user) {
            const isSame = await bcrypt.compare(password, user.password);
            if (isSame) {
                res.send({
                    status: 200,
                    message: "User logged in successfully"
                });
            }
            else {
                res.send({
                    status: 404,
                    message: 'Authentication failed'
                });
            }
        }
        else {
            res.send({
                status: 404,
                message: 'Authentication failed'
            });
        }
    }
    catch (e) {
        console.log(e.message);
    }
}

module.exports = { registerUser, loginUser };