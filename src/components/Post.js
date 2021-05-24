import React, { useState } from "react";
import Navigation from "./Navigation";
import db from "../firebase";
import "../styles/post.css"
import {
  TextField,
  FormControl,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    fontWeight: "bold",
  },
  post: {
    display: "flex",
    marginRight: "30%",
    marginLeft: "30%",
  },
  textArea: {
    height: 200,
    padding: " 20px",
  },
  text: {
    padding: "20px",
  },
});

const Post = () => {
  const classes = useStyles();

  const initialState = {
    title: "",
    content: "",
    author: "",
  }

  const [values, setValues] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const addblogHandler = (event) => {
    event.preventDefault();
    db.collection("blogs").add({
      blog: values,
    });
    console.log("data was sent");
    setValues(initialState);
    
  };

  return (
    <div className="container">
      <Navigation />
      <FormControl className={classes.post}>
        <TextField
          value={values.title}
          onChange={handleInputChange}
          type="text"
          name="title"
          placeholder="Title"
          className={classes.text}
        />
        <TextareaAutosize
          aria-label="maximum height"
          value={values.content}
          defaultValue=""
          placeholder="add content"
          name="content"
          className={classes.textArea}
          onChange={handleInputChange}
        />

        <TextField
          value={values.author}
          onChange={handleInputChange}
          type="text"
          name="author"
          placeholder="Author Name"
          className={classes.text}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={addblogHandler}
          className={classes.button}
        >
          Post
        </Button>
      </FormControl>
    </div>
  );
};

export default Post;
