//import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(){
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />} ></Route>
          <Route path='Register' element={<Register />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="Login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
