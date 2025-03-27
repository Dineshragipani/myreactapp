import React, { useState,useEffect } from "react";
export default function App8(){
    const [number,setNumber]=useState(0);
    const [numbers,setNumbers]=useState(0);
    const [total,setTotal]=useState(0);
    const handleSubmit=()=>{
        setNumbers([...numbers,number]);
    }
    
    return(
        <div>
            <h3>this is App8</h3>
            <input type="number" onChange={(e)=>setNumber(e.target.value)} placeholder="Number"></input>
            <button onClick={handleSubmit}>Add</button>
            <p>
                {numbers && numbers.map(value=>(
                    <div>{value}</div>
                ))}
            </p>
        </div>
    )
}