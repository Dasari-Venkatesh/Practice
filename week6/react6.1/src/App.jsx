import React,{ useState } from "react"

function App() {
  return (
        <div>
            <HeaderWithButton></HeaderWithButton>
            <Header title="Venkateshfa"></Header>
            <Header title="Venkateshfa"></Header>
            <Header title="Venkateshfa"></Header>
          </div>
      )

}
function Header({title}){
  
  return <h1>
    {title}
    </h1>
  
}
function HeaderWithButton(){

  const [firstTitle,setfirstTitle] = useState("My name is Venkatesh.");
  return <>
      <button onClick={() =>{setfirstTitle("My number is "+Math.random())}}>Click to change name</button>
      <Header title={firstTitle}></Header>
    </>
}
export default App