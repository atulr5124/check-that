import React, { useState } from 'react'
import './Todo.css'
import { DeleteForever } from '@material-ui/icons'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Modal, makeStyles } from '@material-ui/core'
import db from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: '400',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    }
}))

function Todo({todo}) {

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todoTitle: input
        }, { merge: true })
        setOpen(false)
    }

    return (
        <>
        <Modal open={open} onClose={e => setOpen(false)}>
            <div className={classes.paper}>
                <h1>I am a Modal</h1>
                <input placeholder={todo.todoTitle} value={input} onChange={event => setInput(event.target.value)} />
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>
        <List>
            <ListItem className="todo__list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={todo.todoTitle} secondary="Dummy deadline ⏰" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForever onClick={event => db.collection('todos').doc(todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
