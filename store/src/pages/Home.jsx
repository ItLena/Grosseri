import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard';
import Banner from '../components/Banner'
import PropTypes from 'prop-types'

const Home = (props) => {
    
    const [products, setProducts] = useState([])
    const { onAdd } = props;

    useEffect(() => {
        axios.get('../../public/data/products.json')
            .then(response => {
                console.log("Data:", response)
                setProducts(response.data)
            })

    }, [])

    return (
        <>
            <Banner />
            <div className="section">
                <h1>Welcome to grossery store</h1>
                <div className='container'>
                    {products && products.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            addItem={onAdd}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
Home.propTypes = {
    onAdd: PropTypes.any
}
export default Home;