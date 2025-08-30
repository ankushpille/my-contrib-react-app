import { useState } from "react";

function  Usestateex(){

  const[count, setCount] = useState(0);

  const handleClick = () => {
     setCount((prevCount) => prevCount +1)
     console.log(count);
  }



    return (
        <>
          <h2>useState hook example</h2>
          <p>Count : {count}</p>
          <button onClick={handleClick}>Increment</button>
        
        </>
    )
}


export default Usestateex;