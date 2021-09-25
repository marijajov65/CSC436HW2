import React, {useState} from 'react'
import CreateTodo from './CreateTodo'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
export default function UserBar() {
    const[user, setUser] = useState('');
    if (user) {
        return (
        <>
            <Logout user={user} setUser ={setUser} />
            <CreateTodo ></CreateTodo>
        </>
        )
    } else {
        return ( //has to be returned as one element
        <> 
            <Login setUser={setUser}/>
            <Register setUser={setUser}/>
        </>
        )
    }
}