import React from 'react'
import Header from './Header';
export default function Login(){
    return (
        <div align='center'>
        <p><input type='email' id='email' placeholder='Email' /></p>
        <p><input type='password' id='password' placeholder='Password'/></p>
        <div><button onClick={Header}>Login</button></div>
        </div>
    );
}