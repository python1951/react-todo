import { ListItemAvatar } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Modal,
  IconButton
} from "@material-ui/core";
import "./Todo.css";


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  const updateTodo = () => {
    //update the todo
    db.collection("todos").doc(props.todo.id).set(
      {
        task: input,
      },
      { merge: true },
    );

    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        <div className={classes.paper}>
          <h1>OOOPSS! Need to update...</h1>
          <input
            placeholder={props.todo.task}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={updateTodo}> Update the TODO </button>
        </div>
      </Modal>
      <List className='todo__list'>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.todo.task}
            secondary='Choose a Random Deadline ⏰'
          />
        </ListItem>
        <IconButton aria-label="delete" onClick={(e) => setOpen(true)}>
        <CreateIcon />
      </IconButton>
        
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }></DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
