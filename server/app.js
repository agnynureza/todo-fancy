//dependaci
const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      mongoose = require('mongoose'),
      todos = require('./routes/index'),
      users = require('./routes/users')

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',todos)
app.use('/users',users)

const dburl = 'mongodb://localhost:27017/todo-fancy'

mongoose.connect(dburl,err=>{
    if(!err) console.log('connected to database !')
    else throw new error(err)
})
app.listen(3000,()=>console.log('server up !'))
