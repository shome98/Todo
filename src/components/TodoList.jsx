import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice.js";

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <div>{todo.description}</div>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        delete
                    </button>
                </li>
            ))}
        </>
    )
}
