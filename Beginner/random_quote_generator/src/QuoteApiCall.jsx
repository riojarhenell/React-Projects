import React from "react"
import { useEffect } from 'react'
import axios from "axios"

export default function QuoteApiCall({ setData }) {
  async function newQuote() {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      const data = response.data
      console.log(data)
      setData({ quote: data.quote, author: data.author })
      } catch (error) {
      console.error(error);
      setData({ quote: "Oops.. Something went wrong.", author: "" })
    }
  }

  React.useEffect(() => {
    newQuote()
  }, [])

  return (
    <>
      <div className='container-flex text-center'>
        <div className='row'>
          <div className='col'>
            <button className='btn btn-primary' onClick={newQuote}>Tap for a New Quote!</button>
          </div>
        </div>
      </div>
    </>
  )
}