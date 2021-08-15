import './App.css';
import Todo from './Todo';
import {Button,Input,InputLabel, FormControl} from '@material-ui/core';
import {useState, useEffect} from 'react';
import db from './firebase';
import firebase from 'firebase';



function App() {
const [todos, settodos] = useState([''])
const [input, setinput] = useState('');
useEffect(() => {
  db.collection('todos').orderBy('timestamp').onSnapshot(snapshot =>{
      settodos(snapshot.docs.map(doc => ({id:doc.id, task: doc.data().task })))})
  }, []);
console.log(input);
const addTodo = (event) =>{
    event.preventDefault();


    db.collection('todos').add(
      {
        task:input,
        timestamp :firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    settodos([...todos,input]);
    setinput('');
    console.log(todos)
}
  return (
    <div className="App">
     <h1>
        Hello Programmers 😂😊!!!

     </h1>
     <FormControl>
       <InputLabel>Your Day Todos ✔</InputLabel>
     <Input value={input} onChange={event => setinput(event.target.value)}/>
     <Button disabled ={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
     Add Todo
     </Button>
     </FormControl>
     
     
     {todos.map(todo =>(
       <Todo todo={todo}/>
     ))}
     
    </div>
  );
}

export default App;
