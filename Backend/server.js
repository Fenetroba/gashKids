import express from 'express'
import env from 'dotenv'
import cors from 'cors'
env.config()
import connectDB from './lib/DB.js'
import userRouter from './routers/user.router.js'
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors({
  origin:true,
  credentials:true,
}))


app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('API is running')
})
app.listen(PORT, () => {
  
   connectDB()
  console.log(`Server running on port ${PORT}`)
})








