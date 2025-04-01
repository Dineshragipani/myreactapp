import React,{useState} from 'react'
import Header from './Header';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Register from './Register';
import { appContext } from '../App';
import { useContext } from 'react';
export default function Login(){
    const { user, setUser, users } = useContext(appContext);
    const [msg, setMsg]=useState();
    const Navigate=useNavigate();
    const handleSubmit=()=>{
        const found = users.find(
            (value) => value.email === user.email && value.password === user.password
          );
        if(found){
            user.name=found.name;
            Navigate("/")
        }
        else{
            setMsg("Invalid User")
        }
    }
    return (
        <div align='center'>
            {msg}
        <p><input type='email' id='email' placeholder='Email' 
        onChange={(e)=>setUser({ ...user, email: e.target.value })}/></p>
        <p><input type='password' id='password' placeholder='Password'
        onChange={(e)=>setUser({...user, password:e.target.value})}/></p>
        <div><button onClick={handleSubmit}>Login</button></div>
        <Link to="../Register">Create new Account</Link>
        </div>
    );
}