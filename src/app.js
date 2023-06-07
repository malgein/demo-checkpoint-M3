const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const usersRouter = require('./routes/users.router')

const app = express()

app.get('/', (req, res) => {
  res.send('Nuestro server')
})


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)

module.exports= app

