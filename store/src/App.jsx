
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])
  

  const onAdd = (product) =>{
    const exist = cartItems.find(x=> x.id === product.id)
    exist ? setCartItems(cartItems.map(
      x=> x.id === product.id ? {...exist, count: exist.count +1} : x))
      : setCartItems([...cartItems, {...product, tcount: 1}])
  }

  let links = useRoutes([
    { path: "/", element: <Home onAdd={onAdd}/> },
    { path: "/cart", element: <Cart onAdd={onAdd} /> },
    { path: "/login", element: <Login /> }
  ])
  return (
    <>
     <body>
      <header>
      <Navbar countItems={cartItems.length}/>
      </header> 
        <main>
          {links}
        </main>
      </body>
    </>
  )
}

export default App
