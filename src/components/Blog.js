
// uses the data from somewhere else 
import React from 'react';
import db from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../styles/blog.css";


const Blog =(props)=>{
    const {title,content,author,id} = props
    const updateHandler=()=>{
        console.log("updated.....")
    }

    const deleteHandler=()=>{
        db.collection("blogs").doc(id).delete()
        console.log("deleted.....")
    }
    return(
        <div className="blog">
        <li key={id}>
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
        <h3 className="author">Author: {author}</h3>
       <div className="icons">
       <EditIcon color="primary" onClick={updateHandler}/>
        <DeleteIcon color="secondary" onClick={deleteHandler}/>
       </div>
        </li>
        </div>
    )
}

export default Blog;