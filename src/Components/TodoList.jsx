import { TodoItem } from "./TodoItem"

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {

    return (
        <div className="lists">
            {todos.length === 0 && "No props.todos"}

            {todos.map( todo => {
                return (
                    <TodoItem 
                        {...todo}
                        // id={todo.id} 
                        // title={todo.title} 
                        // completed={todo.completed} 
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        //reminder={reminder}
                    />
                )
            })}
      </div>
    )
}
export default TodoList;