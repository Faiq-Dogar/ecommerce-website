import { Typography } from '@mui/material';
import React from 'react'

const ProductItem = ({ image, item_name, price, stars }) => {

    return (
        <div>
            <img src={image} alt='product image' style={{ width: "100%", height: "300px" }} />
            <Typography variant='h6'>
                <p>{item_name}</p>
            </Typography>
                <p style={{marginTop: "-5%"}}> {price} <span>{stars}</span></p>

        </div >
    );
}

export default ProductItem