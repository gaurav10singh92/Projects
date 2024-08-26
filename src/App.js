import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  let [count,setCount]= useState(0)
  const changedata=()=>{
    setCount(count+1)
  }
  
  return (
    <>
    <div className="container text-center my-5">
  <h1>{count}</h1>
  <button className="btn btn-primary mx-2" onClick={()=>setCount(count+1)}>Increment</button>
  <button className="btn btn-primary mx-2" onClick={()=>setCount(count-1)}>Decrement</button>
  <button className="btn btn-primary" onClick={()=>setCount(0)}>Reset</button>
  
    </div>
    </>
  )

}

export default App;
