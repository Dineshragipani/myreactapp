import React from "react"
import { useState, useEffect} from 'react'
export default function App7(){
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    const [result1,setResult1]=useState(0);
    const [result2,setResult2]=useState(0);
    const handleResult1 = () => {
        setResult1([parseInt(a)+ parseInt(b)]);
    };
    const handleResult2=()=>{
        setResult2([Number(a)*Number(b)])
    };
    useEffect(()=>{
        handleResult1();
    },[a,b]);
    useEffect(()=>{
        handleResult2();
    },[a,b]);
    return(
        <div>
            <h1>This is App7</h1>
            <p><input type="number" onChange={(e)=>setA(e.target.value)} ></input></p>
            <p><input type="number" onChange={(e)=>setB(e.target.value)}></input></p>
            <p>{result1}</p>
            <p>{result2}</p>
        </div>
    )
}