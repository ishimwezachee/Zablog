import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect,useState} from 'react';
import db from './firebase';
import Post from "./components/Post";
import Home from "./components/Home";
import "./App.css";

function App() {
// data should be called from parent 
const [blogs,setBlogs] =useState([])
useEffect(()=>{
db.collection('blogs')
  .onSnapshot(onSnapshot=>{
    // console.log(onSnapshot.docs.map(doc=> doc.data().blog))
  setBlogs(onSnapshot.docs.map(doc=>({id:doc.id,...doc.data().blog})))
  })
},[])
    //  console.log(blogs)
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home blogs={blogs}/>
        </Route>
        <Route path="/Post" >
          <Post />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
