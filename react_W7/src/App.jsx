import React from "react";
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { countAtom, evenSelector } from "./store/atoms/countState";

function App() {
  return (
    <RecoilRoot>
        Hi there
        <Count />
        <EvencountRenderer />
    </RecoilRoot>

  )
}

function Count(){
  return (
    <div>
      <CountRenderer /> <br />
      <Buttons />
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}
function Buttons(){
  // const [count,setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return(
  <>
    <button onClick={() => setCount(count => count+1)}>Increment</button>
    <button onClick={() => setCount(count => count-1)}>Decrement</button>
  </>
  )

}

function EvencountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  const count = useRecoilValue(countAtom);
  return <div>
    {isEven ? `It is even ${count} ` : null}
  </div>
}
export default App
