import React from 'react'

const ClearTodo = (props) => {

    return(
        <button onClick={()=>props.clearCompleted()}>ClearCompleted</button>
    )
}
export default ClearTodo