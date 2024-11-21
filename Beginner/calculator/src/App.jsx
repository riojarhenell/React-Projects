import { useState } from 'react'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Icons'
import ScientificMode from './ScientificMode'
import StandardMode from './StandardMode'

function App() {

  const [ scientific, setScientific ] = useState(false)

  const toggleMode = () => {
    setScientific((prev) => !prev)
  }

  return (
    <>
      <div className='container-fluid d-flex text-center justify-content-center align-items-center vh-100'>
        <div className='row'>
          <div className='col d-flex'>
            {scientific && <ScientificMode />}
            <StandardMode toggleMode={toggleMode} scientific={scientific}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
