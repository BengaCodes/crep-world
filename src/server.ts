import express from 'express'
import router from './routes/routes'
import userRoutes from './routes/user'


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)
app.use('/auth', userRoutes)

app.use((err, req, res, _next) => {
  console.log(err)
  res.json({ message: `had an error: ${err.message}` })
})

export default app