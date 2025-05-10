import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()
const port = 5000

app.listen(port, () => {
    connectDB()
    console.log(`Server Is Running At http:localhost:${port}`)
})