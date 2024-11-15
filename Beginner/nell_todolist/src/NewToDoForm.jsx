import { useState } from "react"

export function NewToDoForm({ onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <div className="row justify-content-center ms-lg-5 ps-lg-5 me-lg-5 pe-lg-5 ms-md-3 ps-md-3 me-md-3 pe-md-3 ms-sm-1 ps-sm-1 me-sm-1 pe-sm-1 mt-sm-1 pt-sm-1 mt-1 pt-1">
            <form onSubmit={handleSubmit} className="new-item-form row">
                <div className="form-row col d-flex align-items-center">
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} 
                    type="text" 
                    id="item" 
                    className="form-control"
                    placeholder="What should we do?"/>
                    <button className="btn btn-primary ms-2">Add</button>
                </div>
            </form>
        </div>
    )
}