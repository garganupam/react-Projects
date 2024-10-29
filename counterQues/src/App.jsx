import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function AddValue(){
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
  }
  function DecreaseValue(){
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
  }
  return (
    <>
    <h1>Count is {count}</h1>
    <button onClick={AddValue}>AddValue</button>
    <br />
    <br />
    <button onClick={DecreaseValue}>Decrease value</button>
 
    </>
  )
}

export default App
