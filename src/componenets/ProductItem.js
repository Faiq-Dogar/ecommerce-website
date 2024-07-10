import { Rating, Typography } from '@mui/material';
import React from 'react'

const ProductItem = ({ image, item }) => {

    const showDisc = () => {
        
    }

    return (
        <div>
            <img src={image} alt='product image' className='product-image' onClick={showDisc}/>
            <Typography variant='h6'>
                {<p>{item.name}</p>}
            </Typography>
            <p className='sale-price'>
                {item.newPrice === 0 ?
                    <p>Rs. {item.oldPrice}/-</p> :
                    (<p><span style={{ textDecoration: "line-through", marginRight: "15px", color: "grey" }}>Rs. {item.oldPrice}/-</span>Rs. {item.newPrice}/-</p>)
                }
                <p className='rating'>
                    <Rating name="half-rating" defaultValue={item.rating} precision={0.5} disabled />
                </p>
            </p>
        </div>
    );
}

export default ProductItem