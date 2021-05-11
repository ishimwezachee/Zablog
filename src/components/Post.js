import React,{useState} from 'react';
import {Link} from 'react-router-dom'
const Post=()=>{
const [state,setState]= useState({
    title:"",
    text:"",
    author:""
});

const stateHandler=(event)=>{
setState(event.target.value);
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("testig ...")
}

    return (
        <div className="post">
          <Link
          to="/"
          >close</Link>
          
      <form>
      <input value={state.title} onChange={stateHandler} type="text" name="title" placeholder="Title"/>
        <br/>
        <textarea value={state.text} onChange={stateHandler} type="text" name="text" placeholder="add content"/>
        <br/>
        <input value={state.author} onChange={stateHandler} type="text" name="author" placeholder="Author Name"/>
        <br/>
        <button type="submit" onClick={handleSubmit}>Post</button>  
      </form>
        </div>
    )
}

export default Post;