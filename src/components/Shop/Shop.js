import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selection, setSelection] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleClick = (product) => {
        console.log(product);
        const newSelection = [...selection, product]
        setSelection(newSelection)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>My Selections: {selection.length}</h3>
            </div>
        </div>
    );
};

export default Shop;