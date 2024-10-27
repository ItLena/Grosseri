import { useState } from 'react'
import PropTypes from 'prop-types'
import UserForm from '../components/UserForm'

const Cart = ({ cartItems }) => {
    const [isLogged, setIsLogged] = useState(false)
    return (
        <>
            <div className="section" >
                {
                    isLogged ?
                        <div className="section">
                            <h1>{cartItems.length === 0 ? "Cart is empty" : "Cart"}</h1>
                            {
                                cartItems.map((item) => (
                                    <ul key={item.id}>
                                        <li>{item.title}<span>{item.prise}</span></li>

                                    </ul>
                                ))
                            }
                        </div>
                        :
                        <span className="section">
                            <h1>Log in first to see your cart</h1>
                            <UserForm
                                setIsLogged={setIsLogged}
                            />
                        </span>
                }
            </div>
        </>
    )
}
Cart.propTypes = {
    onAdd: PropTypes.any,
    cartItems: PropTypes.array

}
export default Cart;