import React from 'react';
import {Link} from "react-router-dom"
import "../styles/navigation.css"
const Navigation=()=>{
    return (
        <div className="navigation">
            <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Post">Post</Link>
            </li>
            </ul>
        </div>
    )
}

export default Navigation;