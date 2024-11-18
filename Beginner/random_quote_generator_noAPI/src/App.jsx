import { useState, useEffect } from 'react'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import myData from './../src/assets/quotes.json'

function App() {
  const [index, setIndex] = useState(0) 
  const [randomQuotes, setRandomQuotes] = useState([])
  const quotes = randomQuotes[index]

  useEffect (() => {
    const random = [...myData].sort(() => Math.random() - 0.5)
    setRandomQuotes(random) 
  }, [])

  function newQuote() {
    setIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      if (nextIndex >= randomQuotes.length) {
        const randomize = [...myData].sort(() => Math.random() - 0.5)
        setRandomQuotes(randomize)
        return 0
      }
      return nextIndex
    })
  }

  return (
    <>
      <div className="container-fluid d-flex text-center justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="col">
            <div className="card d-flex justify-content-center">
              <div className="card-header">
                Quote Generator
              </div>
              <div className="card-body mb-0">
                {quotes ? (
                  <>
                    <h5>{quotes.quote}</h5>
                    <p className="mb-0">{quotes.author}</p>
                  </>
                  ) : (<h5>Loading ...</h5>)
                }
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={newQuote}>Tap for New Quote!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;