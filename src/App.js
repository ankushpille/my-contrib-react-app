import logo from './logo.svg';
import './App.css';
import UseStateExample from './UseStateExample';
import UseEffectFetchExample from './UseEffectFetch';
import UseEfffectFetchapi from './UseEffectFetchapi';
import PropsExample from './PropsExample';
import { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import countContext from './context/context';
 import { useSelector,useDispatch } from 'react-redux';
 import { fetchUsers } from './userSlice';
// import { increment,decrement,incrementByAmount } from './createSlice';
// import { increment,decrement } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const{users,loading,error} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch])

  return (
    <>
      {/* <countContext.Provider value={{count}}> */}
        <div className="App">
           <UseStateExample/>
       {/* <UseEffectFetchExample/>
       <UseEfffectFetchapi/>
       <PropsExample/>  */}
          <h1>Users List</h1>
          {/* <button onClick={() => dispatch(increment())}>+</button> */}
          {/* <Navbar /> */}
          {/* <button onClick={() => dispatch(increment())}>click me +</button> */}
          {/* {count} */}
          {/* {loading && <p>loading..</p>}
          {error && <p>Error: {error}</p>}
          <ul>
           {users.map((u) => (
                 <li key={u.id}>{u.name}</li>
           ))}
          </ul> */}
        </div>
      {/* </countContext.Provider> */}
    </>
  );
}

export default App;
