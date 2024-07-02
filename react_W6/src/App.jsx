import { useState, useEffect } from "react";

let GLOBAL_ID = 4;

function App() {
  return <>
    <CardWrapper>
      Venkatesh here
      <CardWrapper>
        Venkatesh here and there
      </CardWrapper>
    </CardWrapper>
    <CardWrapper>
      Venkatesh here and there
    </CardWrapper>
    <CardWrapper>
      <TextComponent/>
    </CardWrapper>
  </>
}

function TextComponent(){
  return <div>
    Hi from text component func,
  </div>
  const [todos, setTodos ] = new useState([])
  // Pooling the Todos by getting from server 

  // fetch("https://sum-server.100xdevs.com/todos").then(async (res) =>{
  //   const result = await res.json();
  //   setTodos(result.todos);
  // })

  // Pooling by using the useEffect hook
  
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) =>{
      const result = await res.json();
      setTodos(result.todos);
    })
  },[])
  return ( <>
  {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
  </>)
   
  
}

function CardWrapper({children}){
    return <div style={{border: "2px solid black",padding: 100}}>
      {children}
    </div>
}


export default App


// function App() {


//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }

// export default App