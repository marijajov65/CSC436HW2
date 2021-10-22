import React from 'react'
import { useContext } from 'react';
import { StateContext } from './Contexts';
import { useResource } from 'react-request-hook';
export default function Todo ({ title, description, dateCreated, dateCompleted, id}) {
 
    const complete = dateCompleted?"":new Date().toLocaleDateString('en-us')
    const {dispatch} = useContext(StateContext)

    const [ , deleteTodo ] = useResource(() => ({
        url: `/todoItems/${encodeURI(id)}`,
        method: 'delete'
    }))

    function handleDelete () {
        deleteTodo()
        dispatch({ type: 'DELETE_TODO', id})
    }

    const [ , toggleTodo ] = useResource(() => ({
        url: `/todoItems/${encodeURI(id)}`,
        method: 'put',
        data:{id, title, description, dateCreated, dateCompleted: complete}
    }))

    function handleToggle () {
        toggleTodo()
        dispatch({ type: 'TOGGLE_TODO', id, getDate:new Date().toLocaleDateString('en-us')})
    }
    
    return (
    <div>
        <h3>{title}</h3>
        <div><i>{description}</i></div>
        <div >Created on : {dateCreated? dateCreated: new Date().toLocaleDateString('en-us')}</div>
        <div>{'Date completed:'.concat(dateCompleted)}</div>
        <label>
          Complete:
          <input
            type="checkbox"
            checked = {dateCompleted?true:false}
            onChange={e=>handleToggle()}
             />
        </label>
        <br />
        <button onClick= {e=>handleDelete()}>Delete</button>

    </div>        
    )
}