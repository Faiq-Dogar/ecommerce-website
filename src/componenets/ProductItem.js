import { Rating, Typography } from '@mui/material';
import React from 'react'

const ProductItem = ({ image, item_name, price, newprice, stars }) => {

    return (
        <div>
            <img src={image} alt='product image' style={{ width: "100%", height: "300px" }} />
            <Typography variant='h6'>
                {<p>{item_name}</p>}
            </Typography>
            <p className='sale-price'>
                {newprice === 0 ?
                    <p>Rs. {price}/-</p>:
                    (<p><span style={{ textDecoration: "line-through", marginRight:"15px", color:"grey" }}>Rs. {price}/-</span>Rs. {newprice}/-</p>)
                }
                <p className='rating'>
                    <Rating name="half-rating" defaultValue={stars} precision={0.5} disabled/>
                    </p>
            </p>
        </div>
    );
}

export default ProductItem