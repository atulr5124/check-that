import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'

function Todo({todo}) {
    return (
        <List>
            <ListItem className="todo__list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={todo} secondary="Dummy deadline ⏰" />
            </ListItem>
        </List>
    )
}

export default Todo
