import { useCallback, useState,useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setlength] = useState(0)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  // useRef hook

  const passwordRef=useRef(null)
   

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!~@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char);
    }
    setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select(); //if the object is present then only select
  passwordRef.current?.setSelectionRange(0,20);//only first 20 will get selected
  // window.navigator.clipboard.writeText(password)
},[password])
  

  useEffect(()=>{   //jab bhi parameters se ched chad hui , toh ye recall ho jayega
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-7  py-5 my-8 text-violet-400 bg-gray-700'>
      <h1 className='text-white text-center my-3 text-2xl p-2'>Password Generator</h1>
      <div className="flex shadow overflow-hidden mb-4  rounded-lg">
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder="Password"
        readOnly
        ref={passwordRef}/>

        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }} />
          <label>Numbers:{numberAllowed}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='numberInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }} />
          <label>Charaters:{charAllowed}</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
