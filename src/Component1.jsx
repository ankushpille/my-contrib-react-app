import { useContext } from "react";
import countContext from "./context/context";

function Component1(){
    const{count} = useContext(countContext);
    return(
        <h1>{count}</h1>
    )
}

export default Component1;