import React, { useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from "./Todo";
import db from './firebase';

import "./App.css";

function App() {

    const [Todos, setTodos] = useState([]);
    const [input, setInput] = useState('') ;
    console.log(db.collection('todos'));

    useEffect(() => {
 db.collection('todos').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => doc.data().todo))})
    },[]);
    console.log(db.collection('todos'));
    const addTodo = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            todo: input
        })
        setTodos([...Todos, input])
        setInput('')
       
        
    }
    return (
     <div className="App">
        
        <FormControl>
            <InputLabel>write a todo</InputLabel>
            <Input type="text" value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
          </Button>           
        </FormControl>
       
    {Todos.map(todo => (<Todo text={todo} />))}
     </div>
     
            

        
    )
}

export default App

