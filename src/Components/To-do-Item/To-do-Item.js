import "./To-do-Item.css"
export default function ToDoItem({title,done, deleteToDo, moveToDo, changeTitle}) {
    return (
        <li>
            <input type="checkbox" checked={done} onChange={moveToDo} />
            <input defaultValue={title} onSubmit={(event) => changeTitle(event.target.value)} />
            <button onClick={deleteToDo}>X</button>
            
      </li>)
}