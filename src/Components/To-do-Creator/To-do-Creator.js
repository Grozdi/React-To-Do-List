import "./To-do-Creator.css"

export default function Todocreator({newToDo }) {
    const BogeGospod = (event) => {
        event.preventDefault()
        newToDo(event.target.Information.value)
    event.target.reset()}
    return (
        <form onSubmit={BogeGospod}>
            <input name="Information" />
            <button>Add Text</button>
            </form>
    )
}