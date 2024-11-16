import { useState } from 'react'
import './App.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import QuoteApiCall from './QuoteApiCall'

function App() {

  const [data, setData] = useState({ quote: "", author: "" })

  return (
    <>
      <div className='container-fluid d-flex text-center justify-content-center align-items-center vh-100'>
        <div className='row'>
          <div className='col'>
            <div className='card d-flex justify-content-center'>
              <div className='card-header'>
                Random Quote Generator
              </div>
              <div className='card-body mb-0'>
                <h5>{data.quote || "Loading quote..."}</h5>
                <p className='mb-0'>{data.author || "Loading author..."}</p>
              </div>
              <div className='card-footer'>
                <QuoteApiCall setData={setData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
