import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css'
import Todo from './Todo'
import db from './firebase'
import firbase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // When the app loads, fetch todos from the database as they get refreshed
  useEffect(() => {
    // this code runs when the app/componet loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todoTitle))
    })
  }, [])

  const addTodo = (event) => {
    // To avoid refreshing the page
    event.preventDefault()
    // Append to array using spread(...)
    // setTodos([...todos, input])
    db.collection('todos').add({
      todoTitle: input,
      timestamp: firbase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello!</h1>
      
      <form>
        <FormControl>
          <InputLabel><span role="img">✅</span> New Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button variant="contained" color="primary" type="submit" onClick={addTodo} disabled={!input}>Add Todo</Button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
