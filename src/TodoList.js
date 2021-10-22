import React from 'react'
import Todo from './Todo'
import { StateContext } from './Contexts'
import { useContext } from 'react'

export default function TodoList () {
    const {state} = useContext(StateContext)
    const {todoItems} = state;

    return (
        <div>
            {todoItems.map((p, i) => <Todo {...p} key={'todo-' + i} />)}
        </div> 
        )
    }