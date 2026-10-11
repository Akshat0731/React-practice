import {useState,useEffect} from "react";
export default function Users(){
    useEffect(()=>{async function getData(){
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        data = await data.json();
        console.log(data);
    }

getData();},[])
    return(
        <div>
            <h1>Users Data:</h1>
        </div>
    );
}