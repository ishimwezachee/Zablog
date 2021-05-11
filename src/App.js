import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Post from "./components/Post";
import Home from "./components/Home";
import "./App.css";

function App() {
const blogs=[
  {
    id:1,
    title:"love",
    content:"love is the feelings you get from your heart",
    author:"Alice"
  },
  {
    id:2,
    title:"unit",
    content:"love is the feelings you get from your heart",
    author:"Geek"
  },
  {
    id:3,
    title:"work",
    content:"work is the feelings you get from your heart",
    author:"Divine"
  },
  {
    id:4,
    title:"sleeping",
    content:"sleeping is the feelings you get from your heart",
    author:"Umurerwa"
  },
]

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home blogs={blogs}/>
        </Route>
        <Route path="/Post" >
          <Post/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
