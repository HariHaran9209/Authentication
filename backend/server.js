import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = 5000

mongoose.connect(process.env.MONGO_DB).then(() => {console.log(`MongoDB is connected`)})

app.listen(port, () => {
    console.log(`Server Is Running At http:localhost:${port}`)
})