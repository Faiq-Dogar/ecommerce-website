import React from 'react'
import Offer from '../componenets/Offer';
import { Container } from '@mui/material';
import Category from '../componenets/Category';
import BestSelling from '../componenets/BestSelling';
import Btns2 from '../componenets/Btns2';


const Product = ({ items, saleImage, filter }) => {
    return (
        <Container maxWidth="xl">
            <Offer saleImage={saleImage} />
            <Category
                filter={filter}
                isdisable={false} />
            <BestSelling
                text={"Flash Sales"}
                items={items.filter(item => item.newPrice !== 0).slice(0, 4)} />
            <Btns2 text={"View All Products"} />
            <BestSelling text={"Explore Our Products"} items={items} />
        </Container>
    )
}

export default Product
