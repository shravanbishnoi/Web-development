import { useState } from 'react'
import './App.css'
import DisplayComponent from './components/DisplayComponent'

function App() {
  const [count, setCount] = useState(0)
  const [showsub, setShowsub] = useState(false)

  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <button onClick={increament} style={{ marginRight: "20px" }}>Add</button>
      <DisplayComponent count={count} />
      {count > 5 && <button onClick={decreament} style={{ marginRight: "20px" }} onc>Subtract ampersand</button>}
      {count > 5 ? <button onClick={decreament} style={{ marginRight: "20px" }} onc>Subtract ternary</button> : null}
      
      {/* <button onClick={reset} style={{ marginRight: "20px" }}>Reset</button> */}
    </>
  )
}

export default App

// if - else
// ternary operator
// ampersand
