import React from 'react'
import '../styles/App.css';
import { useState } from "react";

const App=()=>{
  const [charLimit, setCharLimit] = useState(50)
  const[fontSize, setFontSize] = useState(16)
  const[charCount , setCharCount ] = useState(0)
  const[wordCount, setWordCount] = useState(0)
 
 const onChangeHandler =(e) =>{
    console.log(e.target.value);
    const text = e.target.value;

   setCharCount(text.length);
  
   let w_count = 0;
   if(text.length>0)
   w_count= text.trim().split(" ").length;
    setWordCount(w_count);
 };

    const onCharLimitChangeHandler = (e) =>{
      setCharLimit(parseInt(e.target.value));
    };
    
   
  
  return(
    <div>
      <input type="range" id="fontSize-input" min ="16" max = "32"  onChange={(e) =>{
        setFontSize(e.target.value);
      }}/> 
      <br /><br />
      <input type="number" id="char-limit-input" value={charLimit} onChange={onCharLimitChangeHandler} /> 
      <br /> <br />
      <textarea style= {{fontSize: fontSize+ 'px'}} onChange= {onChangeHandler} maxLength={charLimit}></textarea>
      <br /> <br />
      <div id ="word-counter"> Total number of words written: {wordCount}</div>
      <br /> <br />
      <div id = "char-counter">Total number of characters used: {charCount} </div>
      <br /> <br />
    </div>
  )
}
export default App;
