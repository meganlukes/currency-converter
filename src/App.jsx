import React, { useState, useEffect } from 'react'
import axios from 'axios'
import equals from './images/equals.jpg'

export function App() {
  const [currencyResults, setCurrencyResults] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  useEffect(async () => {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/v1/latest`
    )
    console.log('yes')
    setCurrencyResults(response.data)
  }, [])
  return (
    <body>
      <header>
        <h1>Currency calculator</h1>
      </header>
      <main>
        <form>
          <input type="text" placeholder="0.00" />
        </form>
        <button>Show me the rates!</button>
        <ul>
          <li>$inputted number</li>
          <li>
            <img src={equals} height="50" alt="eqals sign" />
          </li>
          <li>rates</li>
        </ul>
      </main>
    </body>
  )
}
