import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const App = () => {
  const buttonRef = useRef(null);
  const [count, setCount] = useState(0);

  console.log("render");

  function handleRefButton() {
    buttonRef.current.style.display = "none";
  }
  
  return (
    <>
      <button ref={buttonRef} onClick={handleRefButton}>
        Click Me
      </button>
    
      <button onClick={() => setCount(count + 1)}>
        State Increase
      </button>
    </>
  );

}

export default App

