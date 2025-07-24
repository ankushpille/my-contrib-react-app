import logo from './logo.svg';
import './App.css';
import UseStateExample from './UseStateExample';
import UseEffectFetchExample from './UseEffectFetch';
import UseEfffectFetchapi from './UseEffectFetchapi';
import PropsExample from './PropsExample';
import { useState } from 'react';
import Navbar from './Navbar';
import countContext from './context/context';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <countContext.Provider value={{count}}>
        <div className="App">
          {/* <UseStateExample/>
       <UseEffectFetchExample/>
       <UseEfffectFetchapi/>
       <PropsExample/> */}
          <h1>ankush</h1>
          <Navbar />

          <button onClick={handleClick}>click me</button>
          {count}
        </div>
      </countContext.Provider>
    </>
  );
}

export default App;
