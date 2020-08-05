import React, { useState } from 'react';
import './App.css';

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
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
