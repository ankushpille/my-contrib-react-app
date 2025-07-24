import { useState } from "react";
import CheckBoxPropsExample from "./CheckBoxPropsExample";
import StatusComponentProps from "./StatusComponentProps";


function PropsExample(){
    const[checked,isChecked] = useState(false)
    return(
        <>
        <CheckBoxPropsExample checked={checked} isChecked={isChecked}/>
        <StatusComponentProps checked={checked} />
        </>
    )
}

export default PropsExample;