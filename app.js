 const express = require('express')
 const mongoose = require('mongoose')
 const url = 'mongodb://localhost/test'

 const app = express()

 mongoose.connect(url, {useNewUrlParser:true})
 const con = mongoose.connection

 con.on('open', () => {
    console.log('connected....')
 })

app.use(express.json())

const approuter = require('./routers/router')
app.use('/app', approuter)

app.listen(9000, () => {
    console.log("server startes")
})
