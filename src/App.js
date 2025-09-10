// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState,useMemo } from "react";



 







function App() {
  const [count,setCount] = useState(0);
  const [somestate,setSomeState] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
         return count * 10
  },[count]);
   
    
  return (
    <>
      {/* <countContext.Provider value={{count}}> */}
        <div className="App">
             <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
             <button onClick = {() => setSomeState(somestate + 1)}>Click me to increase somestate</button>
           {count}
           {somestate}
            <div>Expensive Calculation: {expensiveCalculation}</div>
        </div>
      
    </>
  );
}

export default App;
