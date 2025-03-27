import { useState } from "react";
import "./App6.css";
export default function App6() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const handleSubmit = () => {
    setProducts([...products, product]);
  };
  const handleDelete = (name) => {
    setProducts(products.filter((value) => value.name != name));
  };
  return (
    <div>
      <h3>This is App6</h3>
      <div className="App-Row">
        <div className="App-Box">
          <p>
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            ></input>
          </p>
          <p>
            <input
              type="number"
              placeholder="Price"
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            ></input>
          </p>
          <p>
            <input
              type="number"
              placeholder="Quantity"
              onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            ></input>
          </p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <ol className="App-Box">
          {products.map((value, index) => (
            <li key={index}>
              {value.name}|{value.price}|{value.qty}|{value.price * value.qty}-
              <button onClick={() => handleDelete(value.name)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}