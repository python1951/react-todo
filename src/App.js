import './App.css';
import {Button,Input,InputLabel, FormControl} from '@material-ui/core';
import {useState} from 'react';

function App() {
const [todos, settodos] = useState(['Fetch Groceries from shop!',' Take the family for Dinner!','Read the Documentary on Great Leaders!'])
const [input, setinput] = useState('');
console.log(input);
const addTodo = (event) =>{
    event.preventDefault();
    settodos([...todos,input]);
    setinput('');
    console.log(todos)
}
  return (
    <div className="App">
     <h1>
        Hello Programmers!!!

     </h1>
     <FormControl>
       <InputLabel>Your Day Todos</InputLabel>
     <Input value={input} onChange={event => setinput(event.target.value)}/>
     <Button disabled ={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
     Add Todo
     </Button>
     </FormControl>
     
     
     {todos.map(todo =>(
       <ul>
         {todo}
         </ul>
     ))}
     
    </div>
  );
}

export default App;
