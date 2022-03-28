import React from 'react';
import styles from './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const { handleClick, product } = props
    const { brand, picture, price } = product

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p className='brand'>Brand: {brand} </p>
            <h4>Price: ${price} </h4>
            <button onClick={() => handleClick(product)} className='add-btn'>Add This</button>
            <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
        </div>
    );
};

export default Product;