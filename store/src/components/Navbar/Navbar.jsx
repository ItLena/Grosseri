import {Link} from 'react-router-dom';
import './style.css'

const Navbar = () =>{
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/"/>Home</li>
                <li><Link to="/login"/>Login</li>
                <li><Link to="/basket"/>Customer basket</li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;