import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Post from "./components/Post";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
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
