import PropTypes from 'prop-types'
import './style.css'


const ProductCard = ({ product }) => {
    return (
        <>
            <div className='card'>
                <img src={product.image} />
                <h5>{product.title}</h5>
                <h3>{product.prise} / {product.measure}</h3>
                <button>Add to cart</button>
            </div>
        </>
    )
}


ProductCard.propTypes = {
product: PropTypes.any
}

export default ProductCard;