import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)//can give any value in default except functtions for now.
  //let counter=5;

  const addValue=()=>{
    console.log("value added",counter)
    counter=counter+1;
    if(counter>20)
      counter=20;
    setCounter(counter)//means jab bhi counter call hoga uske andr ese value update hona start ho jayegi
  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter<0){
      counter=0;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>


    </>
  )
}

export default App

