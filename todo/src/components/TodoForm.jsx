import React, { useState} from "react";

const TodoForm = (props) =>{
  
    const [newTodo, setNewTodo] = useState({
        item: '',
        completed: false,
        id: Date.now()
    })

    const changeHandler = event => {
        setNewTodo({...newTodo, [event.target.name]: event.target.value})
    }
    const submitForm = event => {
        event.preventDefault();
        props.AddNewTodo(newTodo);
        setNewTodo({ item: '', completed: false, id: Date.now()})
    }

    return (
        <form onSubmit={submitForm}>
          <label htmlFor="name">Todo</label>
          <input
            name="item"
            id="name"
            type="text"
            placeholder="Todo"
            onChange={changeHandler}
            value={newTodo.item}
          />
          
          <button type="submit" >Add Todo</button>
        </form>
      );
}

export default TodoForm