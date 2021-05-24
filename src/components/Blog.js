
// uses the data from somewhere else 
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../styles/blog.css";


const Blog =(props)=>{
    const {title,content,author} = props
    return(
        <div className="blog">
        <li>
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
        <h3 className="author">Author: {author}</h3>
       <div className="icons">
       <EditIcon color="primary"/>
        <DeleteIcon color="secondary" />
       </div>
        </li>
        </div>
    )
}

export default Blog;