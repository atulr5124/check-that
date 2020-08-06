import React from 'react'
import './Todo.css'
import { DeleteForever } from '@material-ui/icons'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core'
import db from './firebase'

function Todo({todo}) {

    return (
        <List>
            <ListItem className="todo__list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={todo.todoTitle} secondary="Dummy deadline ⏰" />
            </ListItem>
            <DeleteForever onClick={event => db.collection('todos').doc(todo.id).delete()} />
        </List>
    )
}

export default Todo
