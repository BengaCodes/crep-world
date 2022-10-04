import jwt from 'jsonwebtoken'

export const createJWT = (user) => {
  const token = jwt.sign({
    id: user?.id,
    username: user?.username
  }, process.env.JWT_SECRET)
  return token
}


export const protect = (req, res, next) => {
  const bearer = req?.headers?.authorization

  if (!bearer) {
    res.status(401).json({ message: 'Not Authorized!' })
    return
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    res.status(401).json({ message: 'Not Authorized' })
    return
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
    return
  } catch (e) {
    res.status(401).json({ message: 'Not Authorized' })
    return
  }
}