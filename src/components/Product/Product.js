import React from 'react';
import styles from './Product.css'

const Product = (props) => {
    console.log(props);
    const { brand, picture, price } = props.product

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p className='brand'>{brand} </p>
            <h4> ${price} </h4>
            <button className='add-btn'>Add This</button>
        </div>
    );
};

export default Product;