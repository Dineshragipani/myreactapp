import React from "react";
import { useState, useEffect, useRef } from "react";
export default function App10() {
  const [num, setNum] = useState(0);
  const divRef = useRef();
  const numRef = useRef(0);
  useEffect(() => {
    if (numRef.current > num) {
      divRef.current.style.color = "red";
    } else {
      divRef.current.style.color = "green";
    }
    numRef.current = num;
  }, [num]);
  return (
    <div>
      <h3>This is App10</h3>
      <p>
        <input type="number" onChange={(e) => setNum(e.target.value)}></input>
      </p>
      <div ref={divRef}>{numRef.current}-{num}</div>
    </div>
  );
}