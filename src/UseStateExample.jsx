// import {useState} from 'react'

// function UseStateExample(){
//     const [count,setCount] = useState(0);
//     const [toggled,setToggled] = useState(false);
//     const [name,setName] = useState("");
//      const [submittedName, setSubmittedName] = useState('');


//     // const handleClick = () => {
//     //     setCount(count +1)
//     // }

//     const handleSubmit = (e) => {
//         setSubmittedName(name)
//     }
//     const handleChange = (e) => {
//         setName(e.target.value)
//     }
   
//     return (
//         <>
//          {/* <button onClick={handleClick}>
//             click me
//          </button> */}
//           {/* <button style={{width : '100px', color: toggled ? 'green' : 'red'}} onClick={() => setToggled(!toggled)}>toggle</button> */}
//           <input 
//           type="text" 
//           value={name}
//           onChange={handleChange}
//           />
//           <button onClick={handleSubmit}>submit</button>
//           <h1>{submittedName}</h1>
//         </>
//     )
// }

import { useState } from "react"

function UseStateExample(){
    const[count,setCount] = useState(0);

//    {} <></> jsx example
    const handleClick = () => {
         setCount(count+1);
    }


    return(
        <>
         <button onClick={handleClick}>Click me</button>
         {count} 
        </>
    )
}

export default UseStateExample