import React from 'react';
import Navigationn from './Navigation'

const Home=(props)=>{
    return (
        <div>
            <Navigationn/>
            <ul>
           {props.blogs.map((blog)=>(
               <li key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <h4>{blog.author}</h4>
               </li>
           ))}
           </ul>
        </div>
    )
}

export default Home;