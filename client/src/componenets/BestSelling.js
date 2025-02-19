import React from 'react';
import Heading from './Heading';
import { Container } from '@mui/material';
import Products from './Products';
import Btns2 from './Btns2';

const BestSelling = ({ text, items, add_to_cart }) => {
    return (
        <Container maxWidth="xl">
            <Heading name={text} />
            <Products items={items} add_to_cart={add_to_cart} />
            {/* <Btns2 text={"View All Products"}/> */}
            <hr />
        </Container>
    )
}

export default BestSelling
