import { Button, Rating, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ image, item, add_to_cart }) => {
    const navigate = useNavigate();

    // Debugging log to check if add_to_cart is a function
    // useEffect(() => {
    //     console.log('add_to_cart:', add_to_cart);
    //     if (typeof add_to_cart !== 'function') {
    //         console.error('add_to_cart is not a function');
    //     }
    // }, [add_to_cart]);



    const showDisc = () => {
        navigate(`/product/${item.name}`, { state: { item } });
    }

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