import React,{useState} from 'react';
import Navigation from './Navigation';
import {Input,TextField,FormControl,Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button:{
    fontWeight:'bold'
  },
  post:{
    display:"flex",
    marginRight:'30%',
    marginLeft:'30%'
  },
  // textArea:{
  //   // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   color: 'white',
  //   height: 200,
  //   padding: '0 30px',
  // }

})

const Post=()=>{
  const classes = useStyles();
const [state,setState]= useState({
    title:"",
    text:"",
    author:""
});

const stateHandler=(event)=>{
setState(event.target.value);
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("testig ...")
}

    return (
        <div className="container">
        <Navigation/>       
      <FormControl className={classes.post}>
      <Input 
      value={state.title} 
      onChange={stateHandler} 
      type="text" 
      name="title" 
      placeholder="Title"
      />

        <TextField 
        value={state.text} 
        onChange={stateHandler} 
        id="outlined-basic"
        variant="outlined"
        placeholder="add content"
        className={classes.textArea}
        />
        <Input 
        value={state.author} 
        onChange={stateHandler} 
        type="text" 
        name="author" 
        placeholder="Author Name"
          />
     
        <Button 
        type="submit"
         variant="contained" 
         color="secondary" 
         onClick={handleSubmit}
         className={classes.button}
         >
           Post
           </Button>  
      </FormControl>
        </div>
    )
}

export default Post;