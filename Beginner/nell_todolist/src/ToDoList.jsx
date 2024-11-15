import { ToDoItem } from "./ToDoItem"

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="row justify-content-center ms-lg-5 ps-lg-5 me-lg-5 pe-lg-5 ms-md-3 ps-md-3 me-md-3 pe-md-3 ms-sm-1 ps-sm-1 me-sm-1 pe-sm-1">
      <div className="col">
        <ul className="list-unstyled">
          {todos.length === 0 && (<span className="d-flex justify-content-center fs-4">No Pending Task! Good Job!</span>)}
          {todos.map(todo => {
            return (
              <ToDoItem 
              {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
          })}
        </ul>
      </div>
    </div>
  )
}