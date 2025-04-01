import React from 'react'
import { appContext } from '../App';
import { useContext } from 'react';
export default function Cart(){
    const [cart,setCart,products]=useContext(appContext)
    return (
        <div>Cart</div>
    )
}