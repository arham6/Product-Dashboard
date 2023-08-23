const connectToMongo=require('./util/database')
const express=require('express')
const cors=require('cors')
require('dotenv').config()
connectToMongo()

const app=express()
const port=process.env.PORT || 5000

//to enable cross-origin resource sharing
app.use(cors())

//middleware to use req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api',require('./routes/products'))
app.use('/stats',require('./routes/infographics'))

app.listen(port,()=>{
    console.log(`backend running at http://localhost:${port}`)
})