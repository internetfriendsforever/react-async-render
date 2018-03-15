import React from 'react'
import ReactDOM from 'react-dom'
import Coroutine from 'react-coroutine'

const delay = async ms => (
  new Promise(resolve => setTimeout(resolve, ms))
)

const fetchQuote = () => (
  window.fetch('https://talaikis.com/api/quotes/random/').then(res => res.json())
)

const Quote = Coroutine.create(async function * ({ update }) {
  yield (<div>Loading quote…</div>)

  try {
    const { quote, author } = await fetchQuote()

    await delay(1000)

    return (
      <div>
        <p>“{quote}” – {author}</p>
        <button onClick={update}>Get another</button>
      </div>
    )
  } catch (error) {
    return (
      <div>
        <p>Could not get quote: {error.message}</p>
        <button onClick={update}>Try again</button>
      </div>
    )
  }
})

const root = document.body.appendChild(document.createElement('div'))

function render () {
  ReactDOM.render(
    <Quote key={Math.random()} update={render} />,
    root
  )
}

render()
