import User from '../models/user_model.js'
import bycryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const {username, email, password } = req.body;
    const hasedPassword = bycryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hasedPassword})

    try{
        await newUser.save()
        res.status(201).json('Usser created successfully!')
    } catch (error) {
        res.status(500).json(error.message)
    }
}