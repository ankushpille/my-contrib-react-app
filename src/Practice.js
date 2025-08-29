const { useState,useEffect } = require("react");




// import createcontext from 'react';

// export const countContext = createcontext();



// function app(){
//     const [count,setCount] = usestate(0)
//     return(
//     <countcontext.provider value={count}>
//      <child/>
//      <countcontext.provider/>
//     )
// }

// import usecontext from 'react
// function child(){
//      const count = usecontext(countcontext);
//      return(
//      <>
//         <h1>{count}</h1>
//      </>
//     )
// }


function Practice({ name }) {
    const [count,setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1)
    }

     useEffect(() => {
            console.log("component mounted")
       })

    return(
        <>
           <h1>Practicing</h1>
           <h2>{name}</h2>
           <h2>{count}</h2>
           <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default Practice;