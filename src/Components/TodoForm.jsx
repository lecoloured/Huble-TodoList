import { useState } from "react"

const TodoForm = (props) =>{
    const [newItem, setNewItem] = useState("")
    const [newReminder, setReminder] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        
        if(newItem === "") return 

        props.onSubmit(newItem,newReminder)
    
        setNewItem("")
        setReminder("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            onChange={event=> setNewItem(event.target.value) } 
            type="text" id="item"
          />
          <label htmlFor="itemDate">Reminder</label>
          <input 
            value={newReminder} 
            onChange={event=> setReminder(event.target.value) } 
            type="datetime-local" id="itemDate"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}
export default TodoForm;