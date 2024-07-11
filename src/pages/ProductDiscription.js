import { Container } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import BreadCrums from '../componenets/BreadCrum';

import DiscriptionGrid from '../componenets/DiscriptionGrid';

const ProductDiscription = () => {
    const location = useLocation();
    const { item } = location.state;

    return (
        <Container maxWidth="xl">
            <BreadCrums previous={"Products"} now={item.name} />
            <DiscriptionGrid item={item} />
        </Container>
    )
}

export default ProductDiscription

{/* <Stack direction="column" spacing={3}>
<Chip color="primary" label="Soft" size="small" />
<Chip label="Medium" size="small" />
<Chip label="Hard" size="small" />
</Stack> */}