import User from "../../models/userModal.js"
import asyncHandler from "express-async-handler"
import { generateToken } from "../../helpers/generateToken.js"
// @desc    AUTH user
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))) {
    const token = generateToken(user._id)

    res.json({user, token})
  } else {
    res.status(401)
    throw new Error('Неправильный email или пароль')
  }
})