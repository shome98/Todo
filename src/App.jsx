
import './App.css'
import AddTodo from './components/AddTodos'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center m-10'>hi folks this is a todo</h1>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
