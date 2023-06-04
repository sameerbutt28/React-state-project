import './App.css';
import React, {useState} from "react"
import Imagesuser from "./images/developer.jpeg"
import Imagesfill from "./images/filled.jpeg"
import Imagesunfill from "./images/unfilled.jpeg"

function App() 

{
  const [count, setCount] = React.useState(0)
  
  function add() {
      setCount(prevCount => prevCount + 1)
  }
  
  function subtract() {
      setCount(prevCount => prevCount - 1)
  }
  
  
   
  return (
    <div>
        <div className='devname'> 
        <h1>Sameer Butt- the React developer</h1>
        </div>
<div className="counter">
      
          <button className="counter--minus" onClick={subtract}>–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>

    </div>
      
  )
}


export default App;

 
            