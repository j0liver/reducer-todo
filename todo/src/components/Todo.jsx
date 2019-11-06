import React from 'react'

const Todo = (props) => {
    console.log(props.completed)
    return(
        <div onClick={()=>props.ToggleTodo(props.id)}>
            <h3 style={props.completed ? { textDecoration: 'line-through' } : {}}>{props.name}</h3>
        </div>
    )
}

export default Todo