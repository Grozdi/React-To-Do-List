import Todocreator from "./Components/To-do-Creator/To-do-Creator"
import './App.css';
import { useState } from "react"
import ToDoItem from "./Components/To-do-Item/To-do-Item";

function App() {
    let [toDoList, settoDoList] = useState([])
    let [doneList, setDoneList] = useState([])
    const addToDo = (Title) => settoDoList([...toDoList, { title: Title }])
    const removeToDo = (index, list, updateFunction) => {
        return () => {
            console.log(list.splice(index, 1), index)
            updateFunction([...list])
        }
    }
    const moveToDo = (index, oldList, oldUpdateFunction, newList, newUpdateFunction) => {
        return () => {
            const [toDo] = oldList.splice(index, 1)
            newUpdateFunction([...newList, toDo])
            oldUpdateFunction([...oldList])
        }
        
    }
    const renameToDo = (index, list, updateFunction) => {
        return (title) => {
            list[index].title = title
            updateFunction([...list])
        }
    }
  return (
      <div className="App">
          <h1>To do app</h1>
          <Todocreator newToDo={addToDo} />
          <ul>{toDoList.map((todo, index) => { return <ToDoItem key={index} title={todo.title} changeTitle={renameToDo(index, toDoList, settoDoList)} deleteToDo={removeToDo(index, toDoList, settoDoList)} done={false} moveToDo={moveToDo(index, toDoList, settoDoList, doneList, setDoneList)} /> })}</ul >
          <ul>{doneList.map((todo, index) => { return <ToDoItem key={index} title={todo.title} changeTitle={renameToDo(index, doneList, setDoneList)} deleteToDo={removeToDo(index, doneList, setDoneList)} done={true} moveToDo={moveToDo(index, doneList, setDoneList, toDoList, settoDoList)} /> })}</ul>

    </div>
  );
}

export default App;
