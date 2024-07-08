import React from 'react'
import items from '../db.json';

const ProductItem = () => {

    return (
        <div>
            {items.map((item) => {
                {
                    <div><p>{item.name}</p>
                        <p>{item.oldPrice}</p>
                    </div>
                }
            })}
        </div>
    )
}

export default ProductItem
