const { useState } = require("react");


function Practice({ name }) {
    const [count,setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
    }

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