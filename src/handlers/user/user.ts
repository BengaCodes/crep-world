import { comparePasswords, createJWT, hashPassword } from '../../modules/auth'
import prisma from '../../modules/db'

export const createNewUser = async (req, res) => {
  try {
    const hash = await hashPassword(req?.body?.password)
    const user = await prisma.user.create({
      data: {
        username: req?.body?.username,
        password: hash,
        email: req?.body?.email
      }
    })
    const token = createJWT(user)
    
    res.status(202).json(token)
  } catch (e) {
    res.status(400).json({ message: 'Unable to create user', e })
    return
  }
}

export const signinUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req?.body?.username
      }
    })

    const isValid = await comparePasswords(req?.body?.password, user?.password)

    if (!isValid) {
      res.status(401).json({ message: 'Invalid username or password' })
      return
    }

    const token = createJWT(user)
    res.status(200).json(token)
  } catch (e) {
    res.status(400).json({ message: 'Unable to create user' })
    return
  }
}