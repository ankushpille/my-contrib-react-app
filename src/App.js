import logo from './logo.svg';
import './App.css';
import UseStateExample from './UseStateExample';
import UseEffectFetchExample from './UseEffectFetch';
import UseEfffectFetchapi from './UseEffectFetchapi';
import PropsExample from './PropsExample';
import ChildComponent from './ChildComponent';
import { useEffect, useState,createContext,useContext } from 'react';
// import Navbar from './Navbar';
// import countContext from './context/context';
 import { useSelector,useDispatch } from 'react-redux';
 import { fetchUsers } from './userSlice';
// import { increment,decrement,incrementByAmount } from './createSlice';
// import { increment,decrement } from './redux/actions';

export const countContext = createContext()

function App() {
  // const dispatch = useDispatch();
  // const{users,loading,error} = useSelector((state) => state.users)
  // const a = [1,2,3,4]
   const [count,setCount] = useState(0);
   const [count1,setCount2] = useState(0);

  //npx create react-app application name
  //how do you create event in a react .... we need to create event by giving onclick or onchange like that 

  const handleClick = () => {
    setCount(count+1)
  }

  const handleClick1 = () => {
    setCount2(count1+1)
  }

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[dispatch])



  return (
    <>
      {/* <countContext.Provider value={{count}}> */}
        <div className="App">
          <h1>Users List</h1>
          <button onClick={handleClick}>clickme</button>
           <button onClick={handleClick1}>ReactMemo</button>
           {count1}
           {/* <countContext.Provider value = {{count}}>
             <ChildComponent/>
           </countContext.Provider> */}
           <ChildComponent count={count}/>
          
        </div>
      
    </>
  );
}

export default App;
