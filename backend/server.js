import express from 'express'
import dotenv from 'dotenv'
<<<<<<< HEAD
=======
import cors from 'cors'
>>>>>>> 8025f35 (Complete Register Functionality)
import { connectDB } from './config/db.js'
import UserRoutes from './routes/User.route.js'
import AuthRoutes from './routes/Auth.route.js'

dotenv.config()

const app = express()
const port = 5000

app.use(express.json())
<<<<<<< HEAD
=======
app.use(cors())
>>>>>>> 8025f35 (Complete Register Functionality)

app.listen(port, () => {
    connectDB()
    console.log(`Server Is Running At http:localhost:${port}`)
})

app.use('/api/user', UserRoutes)
app.use('/api/auth', AuthRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || `Internal Server Error`
    res.status(statusCode).json({ success: false, message, statusCode})
})