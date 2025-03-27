import { Link } from 'react-router-dom';
import './Header.css'
export default function Header(){
    return (
        <div className="App-Header-Row">
            <h1>My react app</h1>
            <div>
                <Link to="Register">Register</Link>
                <Link to="products">Home</Link>
                <Link to="Login">Login</Link>
            </div>
        </div>
    );
}