import React from 'react';
import styles from './Product.css'

const Product = (props) => {
    console.log(props);
    const { handleClick, product } = props
    const { brand, picture, price } = product

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p className='brand'>{brand} </p>
            <h4> ${price} </h4>
            <button onClick={() => handleClick(product)} className='add-btn'>Add This</button>
        </div>
    );
};

export default Product;