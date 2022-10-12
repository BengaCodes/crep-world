import { Router } from 'express'
import { body } from 'express-validator'
import { createNewUser, signinUser } from '../handlers/user/user'
import { handleInputErrors } from '../modules/middleware'


const router = Router()

router.post('/signup', body('email').isEmail(), body('username').isString(), handleInputErrors, createNewUser)
router.post('/signin', body('username').isString(), handleInputErrors, signinUser)
router.delete('/delete-user', () => {})


export default router