const express = require('express');
const router = express.Router();
const {createTodo,readTodo,updateTodo,updateStatus,deleteTodo} = require('../controllers/index')

router.post('/',createTodo)
router.get('/',readTodo)
router.put('/:id',deleteTodo)
router.delete('/:id',deleteTodo)


module.exports = router;
