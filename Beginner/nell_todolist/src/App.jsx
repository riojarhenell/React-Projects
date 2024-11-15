import { useState } from "react"
import { NewToDoForm } from "./NewToDoForm.jsx"
import { ToDoList } from "./ToDoList.jsx"
import { useEffect } from "react"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() =>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  }, [todos])

  function addToDo(title) {
    setTodos((currentTodos) => {
      return [
      ...currentTodos, {id: crypto.randomUUID(), title, completed: false },
      ]
  })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function themingSwitcher() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "dark" ? "light" : "dark";
  }

  return ( 
    <div className="container-fluid m-1 p-1" >
      <div className="row ms-1 me-1 mt-1 ps-1 pe-1 pt-1">
        <div className="col ms-3 ps-2 me-3 pe-2">
          <div className="row ms-lg-5 ps-lg-5 me-lg-5 pe-lg-5 mt-lg-5 pt-lg-5 ms-md-3 ps-md-3 me-md-3 pe-md-3 mt-md-3 pt-md-3 ms-sm-1 ps-sm-1 me-sm-1 pe-sm-1 mt-sm-1 pt-sm-1 mt-1 pt-1">
            <div className="col">
              <li class="nav-item align-items-center d-flex" >
              <span className="me-2"><FontAwesomeIcon icon={faSun} /></span>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="themingSwitcher" onClick={themingSwitcher} />
                </div>
              <span className=""><FontAwesomeIcon icon={faMoon} /></span>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-1 p-1">
        <div className="col">
          <NewToDoForm onSubmit={addToDo}/>
        </div>
      </div>
      <div className="row ms-1 me-1 mt-1 ps-1 pe-1 pt-1">
        <div className="col ms-3 ps-2 me-3 pe-2">
          <div className="row ms-lg-5 ps-lg-5 me-lg-5 pe-lg-5 mt-lg-1 pt-lg-1 ms-md-3 ps-md-3 me-md-3 pe-md-3 ms-sm-1 ps-sm-1 me-sm-1 pe-sm-1">
            <div className="col">
              <h2 className="header">To Do List</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row ms-1 me-1 ps-1 pe-1">
        <div className="col ms-3 ps-2 me-3 pe-2">
          <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </div>
  )
}