<template>
    <div>
        <h3 style="text-align: center;">Todos</h3>
        <div class="legend">
             <span>Double click to mark as completed</span>
              <span>
                  <span class="incomplete-box"></span> = Incomplete
              </span>
              <span>
                  <span class="complete-box"></span> = Complate
              </span>
        </div>
        <div class="todos">
        <div v-bind:class="{'iscomplete': todo.completed}" @dblclick="onClickChangeStatus(todo)" v-for="(todo, index) in getAllTodos" :key="index" class="todo">
              {{ todo.title }}
              <i @click="removeTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Todos",
    methods: {
       ...mapActions(['getTodos', 'deleteTodo', 'updateTodo']),
       removeTodo(id) {
           console.log("id", id)
           this.deleteTodo(id)
       },
       onClickChangeStatus(todo) {
           const updateStatus = {
               id: todo.id,
               title: todo.title,
               completed: !todo.completed,
           }
           this.updateTodo(updateStatus)
       }
    },
    computed: {
        ...mapGetters(['getAllTodos']),
    },
    created() {
        this.getTodos()
    }
}
</script>
<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }

    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e
    }

    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
        margin-left: 10px;
    }  
    .iscomplete {
        background: #35495e;
        color: #fff;
    } 
</style>