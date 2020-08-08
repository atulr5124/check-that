import React, { useState, useEffect } from 'react';
import './App.css'
import Todo from './Todo'
import db from './firebase'
import firbase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Form, Container, Button, Row, Col, ListGroup } from 'react-bootstrap';

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // When the app loads, fetch todos from the database as they get refreshed
  useEffect(() => {
    // this code runs when the app/componet loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todoTitle: doc.data().todoTitle
      })))
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
    <div>
      <Jumbotron>
        <Container fluid="md">
          <Row>
            <Col md={3} sm={12}><h1 className="doer__header__jt">DOER</h1></Col>
            <Col md={9} sm={12} xl="6">
              <Form className="todo__form__jt">
                <Form.Group controlId="formBasicTask">
                  <Form.Control type="text" placeholder="Add a new task here..."
                    value={input} onChange={event => setInput(event.target.value)} />
                </Form.Group>
                <div className="form-actions">
                  <Button onClick={addTodo} disabled={!input} variant="primary" type="submit">
                    ADD
                  </Button>
                </div>

              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <ListGroup className="list__of__todos" variant="flush">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
