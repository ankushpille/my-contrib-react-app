// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";



 







function App() {
  const [count,setCount] = useState(0);

  useEffect(() => {
      console.log("count value changed:",count)
  },[])
  

  const handleClick = () => {
     setCount(count +1)
  }

  return (
    <>
      {/* <countContext.Provider value={{count}}> */}
        <div className="App">
           <button onClick={handleClick}>click me</button>
           {count}
        </div>
      
    </>
  );
}

export default App;
