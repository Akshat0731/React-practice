import {useState} from "react";
export default function Counter(){
    let [count,setCount] = useState(0);
    function incCount(){
        setCount((count)=>count+1);
    }

    function decCount(){
        setCount((count)=>count-1);
    }

    function reset(){
        setCount(0);
    }
    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increase</button> <br></br><br></br>
            <button onClick={decCount}>Decrase</button><br></br><br></br>
            <button onClick={reset}>Reset</button><br></br><br></br>
        </div>
    );
}