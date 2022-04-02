import React, { useState } from 'react';
import './App.css';

function App() {


  //take a state for the screen value
  const [screen, setScreen]=useState('');

  
const handleClear=()=>{
  setScreen('');
}


//to backspace
const handleDel=()=>{
 
    setScreen(screen.slice(0,screen.length-1));
}

//to evaluate the value of the equation
const handleSolve=()=>{
 try{
  setScreen(eval(screen).toString());
}
catch(err)
 {
   setScreen('Invalid Input')
}
}

//to add value to the screen input
  const handleClick=(e)=>{
  
    setScreen(screen.concat(e.target.value));  
  }
  return (
  <div className="App" style={{left:'50%',top:'50%',borderRadius:'8px'}}>
  
       <div className='box' style={{backgroundColor:'black',height:'100px',width:'360px',borderRadius:'8px'}}>
        <h1 style={{color:'red', marginTop:'20px',marginLeft:'0px'}}>
        {screen}
        </h1>
          
       </div>


      <div> 
        <button  onClick={handleClear}>C</button>
        <button  onClick={handleDel}>Del</button>
        <button  value='+' onClick={handleClick}>+</button>
        <button  value='/'  onClick={handleClick}>/</button>
      </div>
      <div>
        <button value='1'  onClick={handleClick}>1</button>
        <button value='2'  onClick={handleClick}>2</button>
        <button value='3'  onClick={handleClick}>3</button>
        <button value='*' onClick={handleClick}>*</button>
      </div>
      <div>
        <button value='4'  onClick={handleClick}>4</button>
        <button value='5'  onClick={handleClick}>5</button>
        <button value='6'  onClick={handleClick}>6</button>
        <button value='-'  onClick={handleClick}>-</button>
      </div>

   <div>
        <button value='7'  onClick={handleClick}>7</button>
        <button value='8'  onClick={handleClick}>8</button>
        <button value='9'  onClick={handleClick}>9</button>
        <button value='.'  onClick={handleClick}>.</button>
      </div>
    
      <div>
       <button style={{width:'240px'}}value='0'  onClick={handleClick}>0</button>
        <button style={{width:'120px'}}  onClick={handleSolve}>=</button>
        
      </div>
    </div>
  );
}

export default App;
