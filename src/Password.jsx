import {useState} from "react";
export default function Password(){

    let [hide,setHide] = useState(false);
    function submit(event){
        event.preventDefault();
    }

    function handleHide(){
        setHide((val)=> !val);
    }
    return (
        <form onSubmit={submit}>
            <input type={hide ? "password" : "text"} placeholder="Enter Password: "/> <br /><br />
            <button onClick={handleHide}>Hide</button>
            <button>Submit</button>

        </form>
    );
}