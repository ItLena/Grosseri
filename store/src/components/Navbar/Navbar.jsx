import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import './style.css'
import { TiShoppingCart } from "react-icons/ti";
import SearchBar from '../SearchBar'

const Navbar = ({countItems}) =>{
    return(
        <>
            <nav>
                <Link to="/" className='navLink'>Home</Link>
                <Link to="/login" className='navLink'>Login</Link>
                <span><SearchBar/></span>
                <span>
                <Link to="/cart" className='navLink'><TiShoppingCart className="icon"/></Link>
                <p>{countItems}</p>
                </span>
            </nav>
       
        </>
    )

}
Navbar.propTypes = {
    countItems: PropTypes.number,
   
    }

export default Navbar;