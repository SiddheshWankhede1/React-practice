import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter] = useState(1)
  //let counter = 10;

  const addValue = () => {
    if(counter==20){
      alert("Cant go above 20");
      return 0;
    }
    setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter==0){
      alert("Cant go in negative");
      return 0;
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h1 >chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value </button>
      <br></br>
      <button onClick={removeValue}>remove value </button>
      
    </>
  )
}

export default App
