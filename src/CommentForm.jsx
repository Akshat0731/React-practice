import {useState} from "react";
export default function CommentForm({addNewComment}){

    let [data,setData] = useState({name:"",comment:""});
    function submit(event){
        event.preventDefault();
        addNewComment(data);
        setData({name:"",comment:""});
    }

    function handleData(event){
        setData((data)=>(
            {...data,[event.target.name]:event.target.value}
        ));
    }
    return (
        <form onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="enter name:" id="name" name="name" onChange={handleData} value={data.name}/>
            <br /><br />
            <label htmlFor="comment">Comment:</label>
            <input type="text" placeholder="enter comment" id="comment" name="comment" onChange={handleData} value={data.comment}/>
            <br /><br />
            <button>Submit</button>
            <hr />
        </form>
    );
}