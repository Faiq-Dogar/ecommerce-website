import React from 'react';
import Heading from './Heading';
import { Container } from '@mui/material';
import Products from './Products';
import Btns2 from './Btns2';

const BestSelling = () => {
    return (
        <Container maxWidth="xl">
            <Heading name={"Best Selling Products"} />
            <Products />
            <Btns2 text={"View All Products"}/>
            <hr/>
        </Container>
    )
}

export default BestSelling
