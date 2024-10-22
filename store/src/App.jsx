// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Basket from './pages/Basket'
import './App.css'
import {useRoutes} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  let links = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/basket", element: <Basket/>}
  ])
  return (
    <>
    <Navbar/>
    <body>      
      <header>
        <h1>Welcome in to the grossery store</h1>
      </header>
      <div>
        {links}
      </div>
    </body>
    
    </>
  )
}

export default App
