import React, { useReducer } from 'react';

import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import ClearTodo from './ClearTodo'


//reducers
import { initialState } from '../reducers/TodoReducer'
import { reducer } from '../reducers/TodoReducer'
function TodoList() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  const AddNewTodo = (task) =>{
    dispatch({type: 'ADD_TODO', payload: task})
    console.log(state)
  }

  const ToggleTodo = (id) => {
      dispatch({type: 'TOGGLE_COMPLETE', payload: id})
      console.log(id)
  }

  const ClearCompleted = () => {
      dispatch({type: 'CLEAR_COMPLETED_TODOS'})
      console.log(state, 'clear')
  }
  return (
    <div className="App">
      <TodoForm  AddNewTodo={AddNewTodo} />
      {state.map(todo => (
        // console.log(todo.item);
        <Todo key={todo.id} name={todo.item} completed={todo.completed} ToggleTodo={ToggleTodo} id={todo.id}/>
        
      ))}
      <ClearTodo clearCompleted={ClearCompleted} />
    </div>
  );
}

export default TodoList;
