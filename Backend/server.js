import express from 'express'
import connectDB from './lib/DB.js'
import userRouter from './routers/user.router.js'

const app = express()
app.use(express.json())

// Connect to MongoDB
await connectDB()

app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('API is running')
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
     
  console.log(`Server running on port ${PORT}`)
})








