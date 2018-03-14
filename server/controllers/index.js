const Todo = require('../models/todo')

module.exports = {
    addTodo(req,res){
        const {todo,status} = req.body
        let todos = new Todo({todo,status})
        todos.save((err,data)=>{
            if(err) throw new Error ('invalid add todo')
            res.status(201).send({
                message:"success add todo",
                data: data
            })
        })
        
    },
    readTodo(req,res){
        Todo
        .find()
        .exec()
        .then(data=>{
            res.status(201).send({
                message: "show add todo",
                data: data
            })
        })
    },
    updateTodo(req,res){
        const id = req.params.id
        Todo
        .find({_id:id},{$set:req.body})
        .then(data=>{
            res.status(201).send({
                message: "success update todo",
                data:data
            })
        })
    },
    deleteTodo(req,res){
        const id = req.params.id
        Todo
        .deleteOne({_id:id})
        .then(data=>{
            res.status(201).send({
                message : "success delete todo"
            })
        })
    }
}