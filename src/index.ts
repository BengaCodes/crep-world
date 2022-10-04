import app from './server'
import * as dotenv from 'dotenv'
dotenv.config()

app.listen(8000, () => {
  console.log(`App is running and listening on PORT ${8000}`)
})

