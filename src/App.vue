<template>
  <div class="container">
    <AddTodos />
    <FilterTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodos from './components/AddTodos.vue'
import FilterTodo from './components/FilterTodo.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodos,
    FilterTodo
  }
}
</script>

<style>
 body {
   font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
   line-height: 1.6;
   background: #e8f7f0;
 }

 .container {
   max-width: 1100px;
   margin: auto;
   overflow: hidden;
   padding: 0 2rem;
 }
</style>
