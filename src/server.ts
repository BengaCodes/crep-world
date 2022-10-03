import * as express from 'express'
import router from './routes/routes'
import userRoutes from './routes/user'


const app = express()


app.use('/api', router)
app.user('/auth', userRoutes)

export default app