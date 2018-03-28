<template>
 <div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<h1 class="text-center">Todolist</h1>
				<hr>
				<input type="text" class="form-control" placeholder="Input todolist & enter" v-model="todo.name" v-on:keyup.enter="addTodo">
				<hr>
				<ul class="list-group">
					<item v-for="(item,index) in todos" v-bind:item="item" v-bind:key="index" v-on:toggleTodo="toggleTodo" v-on:deleteTodo="deleteTodo"></item>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import item from '@/components/todo-item'

export default {
  components: {item},
  data: function(){
    return {
      todos: [],
      todo: {
        name: '',
        done: false
      }
    }
  },
  methods: {
    addTodo(){
      if(this.todo.name != ''){
        this.todos.push(this.todo)
        this.todo = {
          name: '',
          done: false
        }
      }
    },
  toggleTodo(todo){
    let index = this.todos.indexOf(todo);
    this.todos[index].done = !this.todos[index].done
  },
    deleteTodo(todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
}

}
</script>

<style>

</style>
