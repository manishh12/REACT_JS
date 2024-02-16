import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcounter]=useState(1)
 const addvalue=()=>{

    setcounter(counter+1);
    setcounter(prevCounter=>prevCounter+1);
 }
 const subvalue=()=>{
  if(counter>0)setcounter(counter-1);
  else setcounter(counter);
 }
  return (
    <>
   <h1>React counter</h1>
   <h2>Count is :{counter}</h2>
   <button onClick={addvalue}>Increment value:{counter}</button>
   <br />
   <button onClickCapture={subvalue}>Decrement Value :{counter}</button>
    </>
  )
}

export default App
