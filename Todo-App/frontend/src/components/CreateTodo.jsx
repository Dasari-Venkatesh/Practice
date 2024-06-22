import { useState } from "react";

export function CreateTodo(props){
    // react queries are used to get the payload efficiently
    //for now using widely used unoptimal way
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    return <div>
        <input id= "title" type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} /><br /><br />

        <input id = "desc" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}
        
        /><br /><br />

        <button onClick={() =>{
            // Axios are advanced than fetch

            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a Todo</button>
    </div>
}