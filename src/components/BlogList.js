// we Just Make a loop and return the blook component 

import React from 'react';
import Blog from './Blog';

const BlogList =(props)=>{
    const {blogs} = props;
    console.log(blogs)
    return (
        <ul>
            {
            blogs.map(blog=>(
                <Blog 
                id={blog.id}
                title={blog.title}
                content={blog.content}
                author = {blog.author}
                />
            ))
            }
        </ul>
    )
}

export default BlogList;