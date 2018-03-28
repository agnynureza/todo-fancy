<template>
  <li class="list-group-item" v-bind:style="isActive"> {{ item.name }}
		<button type="button" class="btn btn-success  btn-sm " v-on:click="toggleTodo"><i class="fas fa-check"></i></button>
		<button type="button" class="btn btn-danger btn-sm " aria-label="Close" v-on:click="deleteTodo"><i class="fas fa-trash-alt"></i></button>
	</li>
</template>

<script>
export default {
  props: ['item'],
  methods: {
  toggleTodo(){
    this.$emit('toggleTodo',this.item)
  },
  deleteTodo(){
    this.$emit('deleteTodo',this.item)
  }
},
computed: {
  isActive(){
    if(this.item.done){
      return 'text-decoration:line-through'
    }
  }	
}

}
</script>

<style>

</style>
