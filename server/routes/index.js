const express = require('express');
const router = express.Router();
const {addTodo,readTodo,updateTodo,deleteTodo} = require('../controllers/index')

router.post('/todo',addTodo)
router.get('/todo',readTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)


module.exports = router;
