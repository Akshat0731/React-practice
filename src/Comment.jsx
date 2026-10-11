import {useState} from "react";
import "./Comment.css"
import CommentForm from "./CommentForm";
export default function Comment(){

    let [comment,setComment] = useState([{comment:"Nice Place",name:"Akshat"}]);

    function addNewComment(comment){
        setComment((prevData)=>(
            [...prevData,comment]
        ))
    }
    return (
        <>
        <CommentForm addNewComment={addNewComment}/>
        <div>
            <h1>All Comments:</h1>
            {comment.map((el,idx)=>(
                <div key={idx} className="cmnt">
                    <h4>{el.name}</h4>
                    <p>{el.comment}</p>
                </div>
            ))}
        </div>
        </>
    );
}