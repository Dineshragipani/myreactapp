import { useState } from "react";
export default function App5() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();
  const handleSubmit = () => {
    setTodos([...todos, task]);
  };
  const handleDelete=()=>{
    setTodos(todos.filter((value)=> value!==task))
  }
  return (
    <div>
      <h3>This is App5</h3>
      <p>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        ></input>
        <button onClick={handleSubmit}>Submit</button>
        <hr></hr>
        {todos.map((value, index) => (
          <li key={index}>{value}-<button onClick={()=>handleDelete(value)}>Delete</button></li>
        ))}
      </p>
    </div>
  );
}