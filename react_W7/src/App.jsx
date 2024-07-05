import React, { useContext } from "react";
import { useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Hi there
      <CountContext.Provider value={ {count} }>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return (
    <div>
      <CountRenderer /> <br />
      <Buttons setCount={setCount}/>
    </div>
  )
}

function CountRenderer(){
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}
function Buttons({setCount}){
  const {count} = useContext(CountContext)
  return(
  <>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
  </>
  )

}
export default App
