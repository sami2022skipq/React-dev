const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';

const registerController = async (req, res) => {

    const { name, email, password } = req.body


    if (!name || !email || !password) {
        return res.status(400).json({ success: false, msg: "Plesae fill in all the details" })
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {

        return res.status(400).json({ success: false, msg: "Plesae enter a valid email" })
    }

    // Checking for alredy regiserd users
    const oldEmail = await User.findOne({ email })
    if (oldEmail) {
        return res.status(403).json({ success: false, msg: "User with this email alredy exsists" })

    }
    if (password.length < 8) {
        return res.status(400).json({ success: false, msg: "Password should be of alteast 8 characters" })

    }

    // Hashing Password
    bcrypt.hash(password, saltRounds)
        .then(hash => {
            // console.log("Hash", hash)

            // Store hash in your password DB.
            const newUser = new User({
                name, email, password: hash

            })
            newUser.save()

            return res.status(201).json({ "success": true, "User": newUser })
        }
        )
        .catch(err => console.error(err.message));

}

module.exports = { registerController }