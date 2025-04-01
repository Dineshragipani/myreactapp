import "./Products.css"
import "./Register"
import { appContext } from "../App";
import { useContext, useState } from "react";
export default function Products() {
  const {user,products,cart,setCart}=useContext(appContext);
  const addToCart=(id)=>{
    setCart({...cart,[id]:1});
    console.log(cart);
  };
  return (
    <div>
      <p align="center">{user.name}</p>
      <div className="App-Products-Row">
        
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button onClick={()=>addToCart(value.id)}>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
}