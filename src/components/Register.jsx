import React from 'react'
import { useState,useRef } from "react"
import Login from "./Login";
import { Link } from 'react-router-dom';
import "./Register.css";
//import Login from '../login.jsx';
export default function Register(){
    const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [msg,setMsg]=useState()
  const [msg1,msgRef]=useState();
  const handleSubmit = () => {
    const found=users.find(value => value.email===user.email)
    if(found){
        msgRef.current.style.color(setMsg("User already exist"))=red
    }else{
        setMsg()
        setUsers([...users, user]);
        setUser({email:"",fname:"",lname:"",password:""})
    }
  };
  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email != email));
  };
    return (
        <div className='App-Register-Row'>
            <div  className='App-Register-Box'>
                <h2>Registration Form</h2>
                {msg}
                <p><input type='text' value={user.fname} placeholder='First name' onChange={(e) => setUser({ ...user, fname: e.target.value })}></input></p>
                <p><input type='text' value={user.lname} placeholder='Last name' onChange={(e) => setUser({ ...user, lname: e.target.value })}></input></p>
                <p><input type='email' value={user.email} placeholder='email' onChange={(e)=> setUser({...user, email:e.target.value})}></input></p>
                <p><input type='password' value={user.password} placeholder='Password' onChange={(e)=> setUser({...user, password:e.target.value})}></input></p>
                <button onClick={handleSubmit}>Submit</button><br></br>
                <Link to=".../login">Already a member?Login</Link>
            </div>
            <div className="App-Register-Box">
                <table className='App-Register-Table'>
                <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                {users.map((value, index) => (
                    
                    <tr key={index}>
                    <td>{value.fname}</td>
                    <td>{value.lname}</td>
                    <td>{value.email}</td>
                    <td>
                        <button onClick={() => handleDelete(value.email)}>Delete</button>
                    </td>
            </tr>
                ))}
                </table>
            </div>
        </div>
    );
}