import React, {useState} from 'react'
import { StateContext } from './Contexts';
import { useContext } from 'react';
import { useResource } from 'react-request-hook';

export default function CreateTodo () {


    const [todo , createTodo ] = useResource(({ title, description, dateCreated, dateCompleted}) => ({
        url: '/todoItems',
        method: 'post',
        data: { title, description, dateCreated, dateCompleted}
    }))

    function handleCreate () {
        const dateCreated = new Date().toLocaleDateString('en-us');
        createTodo({ title, description,dateCreated, dateCompleted:""})
        dispatch({ type: 'CREATE_TODO', title, description, dateCreated:"", dateCompleted:""})
    }


    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('')

    const {dispatch} = useContext(StateContext)

    function handleTitle(e){setTitle(e.target.value)}
    function handleDescription(e){setDescription(e.target.value)}
    
    return (
    <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
        <div>
            <h3>Create new Todo Item</h3>
            <label htmlFor="create-title">Title:</label>
            <input type="text" value = {title} onChange={handleTitle} name="create-title" id="create-title" required/>
        </div>
            <textarea value={description} onChange={handleDescription} /><br></br>
            <input type="submit" value="Create" />
    </form>
            )
        }

