import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "kusu"
  }

  let myArr = [10,20,30]
  return (
    <>
      <h1 className='bg-green-700 text-black p-5 rounded-xl mb-5'>Tailwind</h1>
      <Card username="dipankar"/>
      <Card username="sumita" name={myObj} arr={myArr}/>
      <Card btntxt="view details"/>
    </>
  )
}

export default App
