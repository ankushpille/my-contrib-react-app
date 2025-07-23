import {useState} from 'react'

function UseStateExample(){
    const [count,setCount] = useState(0);
    const [toggled,setToggled] = useState(false);

    // const handleClick = () => {
    //     setCount(count +1)
    // }







    return (
        <>
         {/* <button onClick={handleClick}>
            click me
         </button> */}
          <button style={{width : '100px', color: toggled ? 'green' : 'red'}} onClick={() => setToggled(!toggled)}>toggle</button>
          {}
        </>
    )
}

export default UseStateExample