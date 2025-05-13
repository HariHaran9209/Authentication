import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import AuthRoutes from './routes/Auth.route.js'

dotenv.config()

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    connectDB()
    console.log(`Server Is Running At http:localhost//${port}`)
})

app.use('/api/auth', AuthRoutes)