
// uses the data from somewhere else 
import React from 'react';
import "../styles/blog.css";


const Blog =(props)=>{
    const {title,content,author} = props
    return(
        <div className="blog">
        <li>
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
        <h3 className="author">Author: {author}</h3>
        </li>
        </div>
    )
}

export default Blog;