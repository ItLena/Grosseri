import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () =>{
    const [products, setProducts] = useState([])

   useEffect(()=>{
   axios.get('../../public/data/products.json')
   .then(response =>{
    console.log("Data:",response)
    setProducts(response.data)
   })

   }, [])

    return(
        <>
        <h1>Home page</h1>
        <div className='container'>
            {products && products.map(item =>(
                <ProductCard
                key={item.id}
                product={item}
                />
            ))}
        </div>
        </>
    )
}

export default Home;