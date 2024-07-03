import { useEffect, useState } from "react";

function App(){
  const [inputValue, setInputValue] = useState(0);
  const [finalValue, setfinalValue] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    let sum = 0;
    for(let i = 1; i<= inputValue; i++){
      sum+=i;
    }
    setfinalValue(sum);
  },[inputValue])
  return<>
    <input onChange={(e) => {setInputValue(e.target.value)} } placeholder="Enter n value here "/>
    <h4>The sum for 1 to {inputValue} is : {finalValue}.</h4>
    <button onClick={() => {setCounter(counter+1)}}>Counter</button>
    <button>{counter}</button>
    <button onClick={() => {setCounter(0)}}>Clear</button>
  </>
}
export default App