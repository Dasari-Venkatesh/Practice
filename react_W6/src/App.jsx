import React,{ useState } from "react"
import { memo } from "react"

function App() {
  const [title,setTitle] = useState("My name is ")
  
  function changeName() {
    setTitle("My number is :" + Math.random())
  }
  return (
        <div>
            <button onClick = { changeName }>Click to change name</button>
            <Header title={title}></Header>
            <br />
            <Header title="Venkateshfa"></Header>
            <Header title="Venkateshfa"></Header>
            <Header title="Venkateshfa"></Header>
          </div>
      )

}
const Header = memo(function ({title}){
      return <h1>
          {title}
        </h1>
})

export default App