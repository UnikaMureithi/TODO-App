const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const todoRoutes = require('./routes/todoRoutes')
app.use(express.json())
app.use(cors())
app.use('/', todoRoute)
app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})