export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="row">
      <div className="col">
        <li>
          <div className="row">
            <div className="col d-flex align-items-center">
            <label>
              <input class="form-check-input m-2 p-2" type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                <span className="fs-5">{title}</span>
              </label>
            </div>
            <div className="col d-flex justify-content-end">
              <button onClick={() => deleteTodo(id)} class="btn btn-danger m-1">Delete</button>
            </div>
          </div>
        </li>
      </div>
    </div>
  )
}