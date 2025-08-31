import { useState,createContext,useContext } from "react";

const ToggleContext = createContext();

function Usecontextex(){
        const[isToggle,setToggle] = useState(false);

 
      return(
        <>
         <ToggleContext.Provider value = {{isToggle,setToggle}}>
         <ChildToggle/>
         <ChildDisplay/>
       </ToggleContext.Provider> 
        </>
      )
}

function ChildToggle(){
    const {setToggle} = useContext(ToggleContext);
    return(
        <>
        <button onClick={() => setToggle(prev => !prev)}>Toggle</button>
        </>
    )
}

function ChildDisplay(){
    const  {isToggle}  = useContext(ToggleContext);
    return(
        <>
           {isToggle  ? <p> "Toggle is on"</p> : <p>"Toggle is off"</p>}
           <Grandchild />
        </>
    )
}

function Grandchild(){
    const  {isToggle}  = useContext(ToggleContext);
    return(
        <>
           {isToggle  ? <p> "Toggle is on"</p> : <p>"Toggle is off"</p>}
        </>
    )
}


export default Usecontextex;