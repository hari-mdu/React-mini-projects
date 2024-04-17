import React, { useState } from 'react'
import './index.css'

export const Form = () => {
    const [user,SetUser] = useState({fname : "Hari",lname : "Prakash", age : 22})

    function Handler(e){
        SetUser({...user, [e.target.name]:e.target.value});
    }
  return (
    <>
        <h2>{user.fname} {user.lname} {user.age}</h2>
        <form>
            <input type='text' placeholder='Enter First Name' onChange={Handler} name='fname' value={user.fname}></input>
            <input type='text' placeholder='Enter Last Name' onChange={Handler} name='lname' value={user.lname}></input>
            <input type='text' placeholder='Enter Age' onChange={Handler} name='age' value={user.age}></input>
        </form>
    </>
  )
}
