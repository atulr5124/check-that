import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css';
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState(['Take dogs out for a walk.', 'Take the trash out.', 'Finish the firebase todos app.'])
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    // To avoid refreshing the page
    event.preventDefault()
    // Append to array using spread(...)
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello!</h1>
      <form>
        <FormControl>
          <InputLabel>✅ New Todo</InputLabel>
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
