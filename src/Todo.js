import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'

function Todo({todo}) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary="Todo" secondary={todo} />
            </ListItem>
        </List>
    )
}

export default Todo
