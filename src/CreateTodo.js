import React from 'react'
export default function CreateTodo () {
    return (
    <form onSubmit={e => e.preventDefault()}>
        <div>
            <h3>Create new Todo Item</h3>
            <label htmlFor="create-title">Title:</label>
            <input type="text" name="create-title" id="create-title" required/>
        </div>
            <textarea /><br></br>
            <input type="submit" value="Create" />
    </form>
            )
        }

