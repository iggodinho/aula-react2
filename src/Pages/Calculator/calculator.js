
import React,{useState} from 'react';
import './calculator.css'

export default function Calculator(){
  const [counter,setCounter]=useState(0);
  
  function increment(){
    setCounter(counter+1);
  }

  function decrement(){
    if(counter===0)
      console.log('contador já é zero')
    else{
      setCounter(counter-1);
    }
    
  }

  function reset(){
    setCounter(0)
  }
  

  return(
    <div className='container'>
      <div className='title-container'>
        <h1>Calculadora</h1>
        <button onClick={increment}>Aumentar</button>
        <button onClick={decrement}>Diminuir</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className='counter-container'>
        <h2>
          {counter}
        </h2>
      </div>
    </div>
  )
}


