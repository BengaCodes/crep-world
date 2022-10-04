import express from 'express'
import router from './routes/routes'
import userRoutes from './routes/user'


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)
app.use('/auth', userRoutes)

export default app