import React  from "react";
// import { countContext } from "./App";

function ChildComponent(props){
    // const {count} = useContext(countContext)
    console.log("child is rendering")
  return (
    <>
     {props.count}
    </>
  )
}

export default React.memo(ChildComponent)