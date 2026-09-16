import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './auth/routes'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)
app.use(express.json())
app.use('/auth', authRoutes)


app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
