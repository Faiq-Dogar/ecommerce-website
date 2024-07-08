import React from 'react';
import Heading from './Heading';
import { Container } from '@mui/material';
import Products from './Products';

const BestSelling = () => {
    return (
        <Container maxWidth="xl">
            <Heading name={"Best Selling Products"} />
            <Products/>
        </Container>
    )
}

export default BestSelling
