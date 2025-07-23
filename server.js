import express from 'express'
import dotenv from 'dotenv'
import connection from './config/connection.js'
import noteRoutes from './routes/noteRoute.js'
import userRoutes from './routes/userRoute.js'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json()) 
app.use(cors({orgin:'http://localhost:5173'}))

const PORT = process.env.PORT || 3000

connection()

app.use('/api/notes', noteRoutes)
app.use('/api/users', userRoutes) 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
