import { useEffect, useState } from "react"
import "./styles.css"
import TodoForm from "./Components/TodoForm"
import TodoList  from "./Components/TodoList"

export default function App() {
  const [editItem, setEditItem] = useState("")

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    //console.log(JSON.parse(localValue))
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, reminder) {
    setTodos(currentTodos => {
      return[
        ...todos,
        {id: crypto.randomUUID(), title, completed: false, reminder }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  function editTodo(id, title) {
    // setTodos(currentTodos => {
    //   return[
    //     ...todos,
    //     {id: id, title, completed: false }
    //   ]
    // })
    setEditItem(title)
  }

  function handleEdit(e) {
    e.preventDefault()
    
    if(editItem === "") return 

    editTodo(editItem)

    setEditItem("")
  }


  return ( 
    <>

      <TodoForm onSubmit={addTodo}/>
  
      <h1 className="header">Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}