import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

//data bhej rahe hain global  variable ko


const Login = () => {
    const [username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div  >
    <br />
    <div className='flex justify-content: center align-items:center text-2xl' >
    <h2 >Login</h2>
    </div>
    <br />
        
        <input className='flex' type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)} placeholder='username' />

        <input className="size-2xl" type="text" value={password}
        onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
        

    </div>
  )
}

export default Login