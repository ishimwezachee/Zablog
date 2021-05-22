import React from "react";
import db from '../firebase';
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
  },
});



const Home = (props) => {
    const {blogs} = props

//   const OnDeleteHandler =()=>{
//   db.collection("Texts").doc(props.storyObj.id).delete();
// }
  const classes = useStyles();
  return (
    <div>
      <Navigationn />
      <BlogList  blogs={blogs}/>
      {/* <ul>
        {props.blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <h4>- {blog.author}</h4>
            <Button type="submit" variant="contained" color="default">
              Delete
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              edit
            </Button>
          </li>
        ))}
      </ul> */}
      {/* <Link className={classes.link} to="/Post">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          New Post
        </Button>
      </Link> */}
    </div>
  );
};

export default Home;
