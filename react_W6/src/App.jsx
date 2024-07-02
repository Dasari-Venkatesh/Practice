import { useEffect,useState } from "react";

function App(){
  const [id,setId] = useState(1);
  
  return <>
    <button onClick={() => {
      setId(id+1);
    }}> Next Todo</button>
    <Todo id = {id}></Todo>
  </>
}

function Todo({id}){
  const [todo, setTodo] = useState({'title':'','description':''});

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${ id }`).then(async (res) => {
      const result = await res.json();
      // console.log(result)
      setTodo(result.todo)
    }).catch((error) => console.error('Error fetching the todo:', error));
  },[id])

  let title = todo.title;
  let description = todo.description;
  return <div>
    <h1>{title}</h1>  
    <h3>{description}</h3>
  </div>

}

export default App