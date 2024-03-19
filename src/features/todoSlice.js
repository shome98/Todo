import { createSlice, nanoid } from "@reduxjs/toolkit";  
const initailState = {
    todos: [{
        id: 1,
        description:"please add something"
    }]
}
export const todoSlice = createSlice({
    name: 'todo',
    initailState,
    reducers: {
        //adds new todo by creating a new id using nanoid
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                description:action.payload
            }
            state.todos.push(todo)
        },
        //removes the todo just filters out the id passed todo
        removeTodo: (state, action) => {
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        //updates todo description based on id
        updateTodo: (state, action) => {
            const { id, description } = action.payload
            const index = state.todos.findIndex(todo => todo.id === id)
            if(index!==-1) state.todos[index].description=description
        }

    }
})
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer