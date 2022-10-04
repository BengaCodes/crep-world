import { Router } from 'express'
import { createNewUser, signinUser } from '../handlers/user/user'

const router = Router()

router.post('/signup', createNewUser)
router.post('/signin', signinUser)
router.delete('/delete-user', () => {})


export default router