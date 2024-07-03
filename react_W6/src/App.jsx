import { useEffect, useState } from "react";

function App(){
const [id,setId] = useState(1);
return<>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <Todo id = {id}></Todo>  
  </>
}

function Todo({id}){
  const [todo, setTodo] = useState({'title':'','description':''});
  useEffect(() =>{
    fetch("https://sum-server.100xdevs.com/todo?id="+id)
    .then((res) =>res.json())
    .then((result) => {
      setTodo(result.todo)
    })
  },[id])

  return <>
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </>
}
export default App