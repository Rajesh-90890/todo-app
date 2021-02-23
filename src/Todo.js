import {  List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import "./Todo.css"

function Todo(props) {
    return (
        <div className="Todo">
           <List>
               
               <ListItem>
                   <ListItemText primary={props.text} secondary="dummy deadline" />
               </ListItem>
           </List>
        </div>
    )
}

export default Todo
