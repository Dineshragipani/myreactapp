//import logo from './logo.svg';
import './App.css';
import Register  from './components/Register';
import Products from 'Products';
import Footer from 'Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App(){
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Products />
        <Footer />
        <Routes>
          <Route index element={<Products />} ></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
