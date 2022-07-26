import React, {useEffect, useReducer} from 'react';
import { TodoReducer } from '../08-useReducer/TodoReducer';

const initialState = [
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

   
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));    
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add',
            payload: todo
        }

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: 'Remove',
            payload: id
        })
    }
    

    const handleToggleTodo = (id) => {        
        dispatch({
            type: 'Toggle',
            payload: id
        })
    }

    

  return {
      todos: todos,
      handleNewTodo,
      handleRemoveTodo ,
      handleToggleTodo,
      todoCount: todos.length,
      pendingTodosCount: todos.filter(todo => !todo.done).length,
  } ;
}