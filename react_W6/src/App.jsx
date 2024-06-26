import { useState } from "react";

let GLOBAL_ID = 4;

function App() {
  const [todos, setTodos ] = new useState([{
    id : 1,
    title : "Do Excercise",
    description: "Need to do Yoga"
  },
  {
    id : 2,
    title : "Attend the class",
    description: "I will complete React."
  },
  {
    id : 3,
    title : "React hooks",
    description : "use state and memo"
  }
  ])

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