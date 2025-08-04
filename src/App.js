import logo from './logo.svg';
import './App.css';
import UseStateExample from './UseStateExample';
import UseEffectFetchExample from './UseEffectFetch';
import UseEfffectFetchapi from './UseEffectFetchapi';
import PropsExample from './PropsExample';
import { useState } from 'react';
// import Navbar from './Navbar';
// import countContext from './context/context';
 import { useSelector,useDispatch } from 'react-redux';
// import { increment,decrement,incrementByAmount } from './createSlice';
import { increment,decrement } from './redux/actions';


function App() {
   const count = useSelector((state) => state.value)
   const dispatch = useDispatch()
  return (
    <>
      {/* <countContext.Provider value={{count}}> */}
        <div className="App">
          {/* <UseStateExample/>
       <UseEffectFetchExample/>
       <UseEfffectFetchapi/>
       <PropsExample/> */}
          <h1>Redux example</h1>
          {/* <button onClick={() => dispatch(increment())}>+</button> */}
          {/* <Navbar /> */}

          <button onClick={() => dispatch(increment())}>click me +</button>
          {count}
        </div>
      {/* </countContext.Provider> */}
    </>
  );
}

export default App;
