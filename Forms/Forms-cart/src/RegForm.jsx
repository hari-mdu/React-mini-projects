import React, { useState } from 'react'
import './RegForm.css'

export default function RegForm() {
    const [user, setUser] = useState({
        name: "Ram Kumar",
        age: 25,
        gender: "Male",
        isMarried : true
    })
    function changeHandler(e){
        const name = e.target.name;
        const value = e.target.type === "checkbox"? e.target.checked: e.target.value;
        setUser({...user, [name]:value})

    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <th>Marital Status</th>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                </tbody>
            </table>

            <form>
                <input type='text' placeholder='Full Name' value={user.name} onChange={changeHandler} name='name'></input>
                <input type='number' placeholder='age' value={user.age}  onChange={changeHandler} name='age'></input>
                <div className='gender'>
                    <label htmlFor='male'>
                        <input type='radio' name='gender' id='male' checked={user.gender=='Male'} value='Male' onChange={changeHandler}></input>
                        Male
                    </label>
                    <label htmlFor='female'>
                        <input type='radio' name='gender' id='female' checked={user.gender=='Female'} onChange={changeHandler} value='Female'></input>
                        Female
                    </label>
                </div>
                <label htmlFor='isMarried'>
                    <input type='checkbox' id='isMarried' checked={user.isMarried}  onChange={changeHandler} name='isMarried' ></input>
                    isMarried
                </label>
                
            </form>
        </>
    )
}
