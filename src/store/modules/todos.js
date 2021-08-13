import axios from 'axios'

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo One'
        },
        {
            id: 2,
            title: 'Todo Two'
        }
    ],
}

const getters = {
    getAllTodos: (state) => state.todos,
}

const actions = {
    async getTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
      console.log("title: ", title)
       const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { 
           title,
           completed: false,
       })
       commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        )
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('filter', response.data)
    },
    async updateTodo({ commit }, updateSatus) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updateSatus.id}`, updateSatus)
        commit('changeStatus', response.data)
    }
}

const mutations = {
    setTodos: (state, todos) => {
       state.todos = todos
    },
    newTodo: (state, todo) => {
       state.todos.unshift(todo)
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => {
       return todo.id !== id
    }),
    filter: (state, todos) => {
        return state.todos = todos
    },
    changeStatus: (state, status) => {
        const index = state.todos.findIndex(todo => todo.id === status.id)
        if(index !== -1) {
            state.todos.splice(index, 1, status)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}