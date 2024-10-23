import {Link} from 'react-router-dom';
import './style.css'
import { TiShoppingCart } from "react-icons/ti";
import SearchBar from '../SearchBar'

const Navbar = () =>{
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/"/>Home</li>
                <li><Link to="/login"/>Login</li>
                <li><SearchBar/></li>
                <li><Link to="/basket"/><TiShoppingCart className="icon"/></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;