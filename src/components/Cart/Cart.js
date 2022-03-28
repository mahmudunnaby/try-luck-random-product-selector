import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from './Cart.css'
import SelectionName from './Selection/SelectionName';

const Cart = (props) => {
    const [name, setName] = useState('')
    const [reseting, setReseting] = useState('')

    console.log(props);
    let { selection, setSelection } = props;

    let products = selection
    const chooseOne = () => {
        const randomName = products[Math.floor(Math.random() * products.length)]
        console.log(randomName);
        setName(randomName.brand)
    }
    const reSet = () => {

        setSelection([])
        setName('')
    }

    return (
        <div className='cart'>
            <h3>My Selections </h3>
            <p>Seclected Products:{props.selection.length}</p>
            {
                products.map(product => <h3 key={product.id}>{product.brand}</h3>)
            }
            <button onClick={() => chooseOne()} className='add-btn'>CHOOSE 1 FOR ME</button>
            <h3>Your Choice Should be: {name}</h3>
            <button onClick={() => reSet()} className='add-btn'>CHOOSE AGAIN</button>

        </div>
    );
};

export default Cart;