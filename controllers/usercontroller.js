import passport from '../config/passport.js';
import User from '../models/User.js'
import { signToken } from "../utils/auth.js";
// Create new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message }) 
  }
}
// POST /api/users/login - Authenticate a user and return a token
const loginUser= async (req, res) => {

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: "Can't find this user" });
  }

  const correctPw = await user.isCorrectPassword(req.body.password);

  if (!correctPw) {
    return res.status(400).json({ message: "Wrong password!" });
  }

  const token = signToken(user);
  res.json({ token, user });
};




//redirect 
const redirect = passport.authenticate('github', { scope: ['user:email'] });

/// callback
const callbaack = [
  passport.authenticate('github', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    const token = signToken(req.user);
    // You can pass the token to frontend in query param or a page handler
    res.redirect({token,user:req.user});
  }
];

export { createUser,loginUser,redirect,callbaack }
