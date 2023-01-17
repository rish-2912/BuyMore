import { response } from "express"
import user from "../model/user-schema.js"
export const userSignup = async (req, res) => {
    try {
        const exist1 = await user.findOne({ userName: req.body.userName })
        const exist2 = await user.findOne({ email: req.body.email })
        // console.log(req.body.userName)
        if (exist1) {
            return res.status(401).json({ message: 'username already exists' })
        }
        if (exist2) {
            return res.status(401).json({ message: 'email already exists' })
        }
        const User = req.body
        const newUser = new user(User)
        await newUser.save()
        return res.status(200).json({ message: User })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
export const userLogin = async (req, res) => {
    try {
        const userName = req.body.logine
        const password = req.body.loginp
        let User = await user.findOne({ userName: userName, password: password })
        if (User) {
            return res.status(200).json({ data: User })
        }
        else {
            return res.status(401).json('Invalid login')
        }
    }
    catch (err) {
        return res.status(500).json(err.message)
    }
}