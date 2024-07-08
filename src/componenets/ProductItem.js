import React from 'react'

const ProductItem = ({ item_name, price, stars }) => {

    return (
        <div>
            <p>{item_name}</p>
            <p>{price} <span>{stars}</span></p>
        </div >
    );
}

export default ProductItem