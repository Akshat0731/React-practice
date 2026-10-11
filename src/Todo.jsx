import {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default function Todo(){
    let [todos,setTodos] = useState([{task:"sample task",id:uuidv4()}]);
    let [task,setTask] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        setTodos((todo)=>(
            [...todo,{task:task,id:uuidv4()}]
        ));
        setTask("");
    }

    function handleChange(event){
        setTask(event.target.value);
    }

    function handleDelete(id){
        setTodos((prevTodos)=>{
            return prevTodos.filter((el)=>{
                if(el.id !== id){
                    return {...prevTodos} 
                }
            })
        })
    }
    return(
        <>
        <h1>Task Count= {todos.length}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter task" onChange={handleChange} value={task} /> &nbsp;&nbsp;&nbsp;&nbsp;
            <button>Add</button>
        </form>
        <hr />
        <ul>
        {todos.map((el)=>{
            return <li key={el.id}>{el.task}  <button onClick={()=>handleDelete(el.id)}>Delete</button></li>
        })
        }</ul>
        </>
    );
}