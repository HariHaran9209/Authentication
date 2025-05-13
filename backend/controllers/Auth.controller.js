import User from '../models/User.model.js'
import { authMiddleware } from '../middleware/Auth.middleware.js'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import jwt from 'jsonwebtoken'

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

export const login = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: 'User Not Found'})
        }
        const userPassword = bcrypt.compareSync(password, user.password)
        if (!userPassword) {
            return res.status(401).json({ success: false, message: 'Wrong Credentials'})
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        const { password: hashedPassword, ...rest } = user._doc
        const expiryDate = new Date(Date.now() + 3600000)
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest)
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Internal Server Error: ${error}`})
    }
}