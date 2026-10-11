import { useState } from "react";
export default function Type(){
    let [text,setText] = useState("");

    function handleInput(event){
        setText(event.target.value);
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleInput}/> <br /><br />
            <p>Message: {text === "" ? "Default Message" : text}</p>
        </div>
    );
}