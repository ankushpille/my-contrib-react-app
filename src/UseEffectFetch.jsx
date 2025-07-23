import { useState,useEffect } from "react";

function UseEffectFetchExample(){
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log("running useeffect without dependencies")
    },[count])

    const handleCick = () => {
        setCount(count+1)
    }

    return(
        <>
         <button onClick={handleCick}>click me</button>
         <h1>{count}</h1>
        </>
    )
}

export default UseEffectFetchExample;