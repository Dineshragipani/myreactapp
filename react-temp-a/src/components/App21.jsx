import React, { useEffect, useState } from "react"
export default function App21(){
    const [count,setCount] =useState(0);
    useEffect(()=>{
        console.log("App 21 mounted");
        return()=>{
            console.log("App 21 unmounted");
        }
    },[])

    return(
        <div>
            <h1>this is app 21</h1>
            <p></p>
        </div>
    )
}