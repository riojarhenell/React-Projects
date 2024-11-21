import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Icons'
import DisplayWindow from "./DisplayWindow"

const StandardMode = ({ toggleMode, scientific }) => {
  
  const [ expression, setExpression ] = useState("")
  const [ displayExp, setDisplayExp ] = useState("")
  const [ result, setResult ] = useState("0")

  return (
    <div className='card d-flex justify-content-center' style={{width: '19rem'}}>
      <div className='card-header'>
        {scientific ? 'Scientific Calculator' : 'Standard Calculator'}
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='col d-flex align-items-center'>
            <FontAwesomeIcon icon="bars" onClick={toggleMode}/>
            <span className='m-1'>{scientific ? 'Scientific' : 'Standard'}</span>
          </div>
        </div>
        <div className='row'>
          <div className='col mt-1 pt-1'>
            <DisplayWindow expression={displayExp} result={result}/>
          </div>
        </div>
        <div className='row mt-1 pt-1'>
          <div className='col'>
            <button className="btn"><h5 className="d-flex">{"("}</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5 className="d-flex">{")"}</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5 className="text-center">AC</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5 className="text-center"><FontAwesomeIcon icon="delete-left"/></h5></button>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button className="btn"><h5>7</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>8</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>9</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>x</h5></button>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button className="btn"><h5>4</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>5</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>6</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>-</h5></button>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button className="btn"><h5>1</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>2</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>3</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>+</h5></button>
          </div>
        </div>
        <div className='row'>
        <div className='col'>
            <button className="btn"><h5>.</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>0</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>/</h5></button>
          </div>
          <div className='col'>
            <button className="btn"><h5>=</h5></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardMode