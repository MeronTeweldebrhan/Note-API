import express from 'express'
import { createUser,loginUser ,redirect,callbaack} from '../controllers/usercontroller.js'

const router = express.Router()

router.post('/register', createUser)
router.post('/login',loginUser)

router.get('/auth/github',redirect)
router.get('/auth/github/callback',callbaack)

export default router
