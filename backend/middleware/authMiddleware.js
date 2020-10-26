import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
const protect = asyncHandler(async(req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
                // the '-password' will bring the whole user except for the password
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized. Token failed!')
        }
    } else {
        res.status(401)
        throw new Error('Not Authorized. No token found.')
    }
})


export { protect }