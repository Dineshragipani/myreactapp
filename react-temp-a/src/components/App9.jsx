// import randomColor from "randomcolor";
import React from "react";
import { useState,useRef } from "react";
export default function App9(){
    const [color,setColor]=useState();
    const txtRef=useRef();
    const handleSubmit=()=>{
        txtRef.current.style.color=color;
    }
    return(
        <div>
            <div>
                <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <h2 ref={txtRef}>Hello world</h2>
            </div>
        </div>
    )
}