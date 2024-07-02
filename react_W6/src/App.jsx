import { useState, useEffect } from "react";

let GLOBAL_ID = 4;

function App() {
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

function Todo({title,description}){
  return(<>
    <h1>
        {title}
      </h1>
      <h3>
        { description}
      </h3>
    </>    
  )
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