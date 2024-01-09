import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 15

  let [counter, setCounter ] = useState(15)

  let addValue = () => {
    if (counter >= 0 && counter < 20){
    counter = counter + 1
    setCounter(counter)
    }
  }

  let removeValue = () => {
    if (counter <= 20 && counter > 0){
    counter = counter - 1
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
