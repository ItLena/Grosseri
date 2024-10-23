import PropTypes from 'prop-types'
import './style.css'


const ProductCard = ({ product }) => {
    return (
        <>
            <div className='card'>
                <img src={product.image} />
                <h5>{product.title}</h5>
                <h2>{product.prise} / {product.measure}</h2>
            </div>
        </>
    )
}


ProductCard.propTypes = {
product: PropTypes.any
}

export default ProductCard;