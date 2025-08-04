import { useSelector } from "react-redux";

function Navbar(){
     const count = useSelector((state) => state.counter.value)
      return(
       <h1>navbar {count}</h1>
      )
}

export default Navbar;