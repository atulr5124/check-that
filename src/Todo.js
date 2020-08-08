import React, { useState } from 'react'
import './Todo.css'
import db from './firebase'
import { ListGroup, ButtonGroup, Button, Modal } from 'react-bootstrap'
import { Pencil, Trash } from 'react-bootstrap-icons'

function Todo({ todo }) {

    const [show, setShow] = useState(false)
    const [input, setInput] = useState('')

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todoTitle: input
        }, { merge: true })
        setShow(false)
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo <Pencil size={20} color="royalblue" /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="update__input__field" placeholder={todo.todoTitle} value={input} onChange={event => setInput(event.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={updateTodo}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ListGroup.Item>
                {todo.todoTitle}
                <ButtonGroup aria-label="Task Actions" className="list__item__actions">
                    <Button variant="primary">
                        <Pencil size={20} onClick={handleShow} />
                    </Button>
                    <Button variant="danger" onClick={event => db.collection('todos').doc(todo.id).delete()}>
                        <Trash size={20} />
                    </Button>
                </ButtonGroup>
            </ListGroup.Item>
        </>
    )
}

export default Todo
