const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoSchema = new Schema({
    todo    : String,
    status  : false
})

module.exports = mongoose.model('Todo',todoSchema)