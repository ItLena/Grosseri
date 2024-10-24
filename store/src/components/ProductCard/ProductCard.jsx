import PropTypes from 'prop-types'
import './style.css'


const ProductCard = ({ product, addItem }) => {
    return (
        <>
            <div className='card'>
                <img src={product.image} />
                <h5>{product.title}</h5>
                <h3>{product.prise} / {product.measure}</h3>
                <button onClick={()=>addItem(product)}>Add to cart</button>
            </div>
        </>
    )
}


ProductCard.propTypes = {
product: PropTypes.any,
addItem: PropTypes.any
}

export default ProductCard;