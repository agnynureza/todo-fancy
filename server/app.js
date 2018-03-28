
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')


require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const todos = require('./routes/index')
const users = require('./routes/users')

app.use('/',todos)
app.use('/users',users)

const dburl = 'mongodb://localhost:27017/todo-fancy'

mongoose.connect(dburl,err=>{
    if(!err) console.log('connected to database !')
    else throw new error(err)
})
// app.listen(3000,()=>console.log('server up !'))

module.exports = app
