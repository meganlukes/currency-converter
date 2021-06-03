import React, { useState, useEffect } from 'react'
import axios from 'axios'
import equals from './images/equals.jpg'

export function App() {
  const [currencyResults, setCurrencyResults] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  function updateAmount(event) {
    setAmount(event.target.value)
  }

  useEffect(async () => {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=16062e9a939a637ca354f4db04a8d352`
    )
    if (response.status === 200) {
      console.log(response.data)
      setCurrencyResults(response.data)
    }
    console.log('useEffect')
  }, [])

  return (
    <body>
      <header>
        <h1>How Badly Has My Currency Devalued?</h1>
      </header>
      <main>
        <ul>
          <li>
            <form>
              <b>$</b>
              <input type="text" onChange={updateAmount} placeholder="1.00" />
            </form>
          </li>
          <li>
            <b>=</b>
          </li>
          <li>
            <ol>
              {Object.entries(currencyResults.rates).map(
                ([countryCode, exchangeRate]) => {
                  return (
                    <li className="value" key={countryCode}>
                      {countryCode}{' '}
                      {(exchangeRate * (amount / 1.22)).toFixed(2)}
                    </li>
                  )
                }
              )}
            </ol>
          </li>
        </ul>
      </main>
    </body>
  )
}
