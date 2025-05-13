import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
<<<<<<< HEAD
=======
import validator from 'validator'
>>>>>>> 8025f35 (Complete Register Functionality)

export const register = async (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })

    if (password !== confirmPassword) {
        res.status(500).json({ success: false, message: `Passwords Don't Match` })
    }

    const userExists = await User.findOne({ username })
    
    if (userExists) {
        res.status(500).json({ success: false, message: `User Name Taken Already`})
    }

    const emailExists = await User.findOne({ email })

    if (emailExists) {
        res.status(500).json({ success: false, message: `Email Already Registered` })
    }

    if (password.length < 8) {
        res.status(500).json({ success: false, message: `Enter A Strong Password` })
    }

    if (!validator.isEmail(email)) {
        res.status(500).json({ success: false, message: `Enter A Valid Email` })
    }

    try {
        await newUser.save()
        res.status(201).json({ success: true, message: `User Successfully Created For ${username}` })   
    } catch (error) {
        next(error)
    }
}