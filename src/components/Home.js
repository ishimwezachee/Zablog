import React from "react";
import BlogList from "./BlogList"
import { Button } from "@material-ui/core";
import Navigationn from "./Navigation";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    fontWeight: "bold",
    margin: "10px",
  },
  link: {
    textDecoration: "none",
    position:"fixed",
    bottom:0,
    right:0,
  },
});



const Home = (props) => {
    const {blogs} = props
  const classes = useStyles();
  return (
    <div className="home">
      <Navigationn />
      <BlogList  blogs={blogs}/>
      <Link className={classes.link} to="/Post">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          New Post
        </Button>
      </Link>
    </div>
  );
};

export default Home;
