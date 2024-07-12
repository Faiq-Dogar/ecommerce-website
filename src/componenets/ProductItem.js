import { Button, Rating, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const ProductItem = ({ image, item, add_to_cart }) => {
    const navigate = useNavigate();

    const showDisc = () => {
        navigate(`/product/${item.name}`, { state: { item } });
    }

    console.log("Items form ProductItem", item);

    return (
        <div>
            <img src={image} alt='product image' className='product-image' onClick={showDisc} />
            <div className='add-cart-btn'>
                <Button
                    sx={{ width: "100%", py: "3%" }}
                    color='error' variant='contained'
                    onClick={(e) => add_to_cart(parseInt(item.id))}
                >
                    Add to Cart
                </Button>
            </div>
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