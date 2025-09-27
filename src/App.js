// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState,useMemo, useCallback } from "react";
import Navbar from "./Navbar";
import CreateTodoList from "./Create";



 







function App() {
  const [count,setCount] = useState(0);
  const [somestate,setSomeState] = useState(true);
  const [name,setName] = useState("ankush");

  const handleClick = () => {
    setName((prevName) => prevName == 'ankush' ? 'codewithankush' : 'ankush');
  }



  // const handleClick = () => {
  //    setCount(count + 1);
  // }

  // const handleClick = useCallback(() => {
  //    setCount((c) => c +1);
  // },[count])

  // const handleClick2 = () => {
  //   setSomeState(!somestate);  
  // }



  return (
    <>
      {/* <countContext.Provider value={{count}}> */}
     <h1>Hello ankush</h1>
     <CreateTodoList/>
     <button onClick={handleClick}>Click here</button>
     <h1>{name}</h1>
    </>
  );
}

export default App;
