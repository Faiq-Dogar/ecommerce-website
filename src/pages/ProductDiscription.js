import { Container } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrums from '../componenets/BreadCrum';
import BestSelling from '../componenets/BestSelling';
import DiscriptionGrid from '../componenets/DiscriptionGrid';

const ProductDiscription = ({ itemsL, add_to_cart, qunatity, setQunatity }) => {
    const location = useLocation();
    const { item } = location.state;

    return (
        <Container maxWidth="xl">
            <BreadCrums previous={"Products"} now={item.name} />
            <DiscriptionGrid item={item} qunatity={qunatity} setQunatity={setQunatity}/>
            <hr />
            <BestSelling text={"Explore More Products"} items={itemsL.slice(0, 4)} add_to_cart={add_to_cart} />
        </Container>
    )
}

export default ProductDiscription

{/* <Stack direction="column" spacing={3}>
<Chip color="primary" label="Soft" size="small" />
<Chip label="Medium" size="small" />
<Chip label="Hard" size="small" />
</Stack> */}