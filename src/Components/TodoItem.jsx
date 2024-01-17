export function TodoItem({ id, title, completed, reminder, toggleTodo, deleteTodo }) {

    return (
        <div className="list">
            <div className="list-item">
                <label>
                    <input 
                        type="checkbox" 
                        onChange={event=> toggleTodo(id, event.target.checked) } 
                        checked={completed} 
                    />
                    {title} - <span class='reminder'><small>({reminder})</small></span>
                </label>
            </div>
            <div className="list-item-btn">
                <button 
                    onClick={()=> deleteTodo(id)} 
                    className="btn btn-danger">X
                </button>
            </div>
                    
        </div>
    )
}