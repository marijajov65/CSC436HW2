import UserBar from "./user/UserBar";
import TodoList from "./TodoList"
import {useReducer} from "react";
import CreateTodo from "./CreateTodo";
import appReducer from './reducers';
import { StateContext } from "./Contexts";
import { useResource } from 'react-request-hook';
import React, {useState,useEffect} from 'react';



function App() {

  const [todoItems, getTodoItems ] = useResource(() => ({
    url: '/todoItems',
    method: 'get'
  }))

  const [ state, dispatch] = useReducer(appReducer, { user: '', todoItems: [] })
  
  useEffect(getTodoItems, [])

  useEffect(() => {
      if (todoItems && todoItems.data) {
          dispatch({ type: 'FETCH_POSTS', todoItems: todoItems.data.reverse()})
      }
  }, [todoItems])

  
  const {user} = state;

  return (
    <div className="App">
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <UserBar/>
        {user && <CreateTodo /> }
        <TodoList/>
      </StateContext.Provider>
    </div>
  );
}

export default App;
