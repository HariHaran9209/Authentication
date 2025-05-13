import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import UserRoutes from './routes/User.route.js'
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

app.use('/api/user', UserRoutes)
app.use('/api/auth', AuthRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || `Internal Server Error`
    res.status(statusCode).json({ success: false, message, statusCode})
})