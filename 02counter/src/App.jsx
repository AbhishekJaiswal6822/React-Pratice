import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter]=useState(15)


const addValue=()=>{
{  if (counter<30)
  setCounter(counter+1)
  console.log("clicked",counter)}
}

const removeValue=()=>{
  if (counter>0){
  setCounter(counter-1)
  console.log("clicked",counter)}
}
  return (
    <>

      <h1>React Tutorial</h1>
      <h2>Conter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>decrease value</button>
    </>
  )
}

export default App
