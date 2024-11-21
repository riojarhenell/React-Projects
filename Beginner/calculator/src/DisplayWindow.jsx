import React from "react"

const DisplayWindow = ({ expression, result }) => {
  return (
    <div className='mt-1 pt-1'>
      <h5 className="text-end">{expression}</h5>
      <h2 className="text-end mt-1 pt-1">{result}</h2>
    </div>
  )
}

export default DisplayWindow