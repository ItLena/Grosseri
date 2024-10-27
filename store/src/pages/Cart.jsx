import { useState } from 'react'
import UserForm from '../components/UserForm'

const Cart = () =>{
const [isLogged, setIsLogged] = useState(false)
    return (
        <>
            <div className="section" >
                {
                    isLogged ? <h1>Cart</h1> :
                    <span className="section">
                        <h1>Log in first to see your cart</h1>
                        <UserForm 
                         setIsLogged = {setIsLogged} 
                        />
                    </span>
                }
            </div>
        </>
    )
}

export default Cart;